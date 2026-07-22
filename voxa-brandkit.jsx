import { useState, useRef, useEffect } from "react";

const T = {
  es: {
    title: "Brand Kit",
    sub: "Configura tu logo y colores una sola vez. Voxa los usará automáticamente en cada anuncio que generes.",
    logoSection: "Tu logo",
    logoSub: "Aparecerá automáticamente en todos tus anuncios futuros",
    uploadBtn: "📁 Subir logo",
    dragText: "o arrastra tu archivo aquí",
    fileTypes: "PNG · JPG · SVG · Máx 5MB",
    changeBtn: "Cambiar",
    removeBtn: "Eliminar",
    colorSection: "Color principal de tu marca",
    colorSub: "Voxa lo usará como color base en tus diseños",
    presetColors: "Colores sugeridos",
    customColor: "O elige tu color exacto",
    secondaryColor: "Color secundario (opcional)",
    secondarySub: "Para detalles y acentos",
    fontSection: "Estilo de tipografía",
    fontSub: "Cómo se ve el texto en tus anuncios",
    fonts: [
      { id: "moderno", label: "Moderno", sample: "Aa", family: "'Inter', sans-serif", weight: 800 },
      { id: "elegante", label: "Elegante", sample: "Aa", family: "Georgia, serif", weight: 700 },
      { id: "amigable", label: "Amigable", sample: "Aa", family: "'Inter', sans-serif", weight: 600 },
      { id: "audaz", label: "Audaz", sample: "Aa", family: "'Inter', sans-serif", weight: 900 },
    ],
    previewTitle: "Vista previa con tu marca",
    previewSub: "Así se verán tus próximos anuncios automáticamente",
    saveBtn: "💾 Guardar Brand Kit",
    saved: "✓ Brand Kit guardado",
    savedSub: "A partir de ahora todos tus anuncios usarán esta marca automáticamente",
    activeOn: "Activo en:",
    modules: ["Generador de campañas", "Voxa Creativos", "Modo Político", "Voxa Express"],
    resetBtn: "Restablecer todo",
    noLogo: "Sin logo",
    businessName: "Nombre del negocio",
    businessNamePh: "Ej: Salón Bella",
  },
  en: {
    title: "Brand Kit",
    sub: "Set up your logo and colors once. Voxa will automatically use them in every ad you generate.",
    logoSection: "Your logo",
    logoSub: "Will appear automatically in all your future ads",
    uploadBtn: "📁 Upload logo",
    dragText: "or drag your file here",
    fileTypes: "PNG · JPG · SVG · Max 5MB",
    changeBtn: "Change",
    removeBtn: "Remove",
    colorSection: "Your brand's main color",
    colorSub: "Voxa will use it as the base color in your designs",
    presetColors: "Suggested colors",
    customColor: "Or pick your exact color",
    secondaryColor: "Secondary color (optional)",
    secondarySub: "For details and accents",
    fontSection: "Typography style",
    fontSub: "How text looks in your ads",
    fonts: [
      { id: "moderno", label: "Modern", sample: "Aa", family: "'Inter', sans-serif", weight: 800 },
      { id: "elegante", label: "Elegant", sample: "Aa", family: "Georgia, serif", weight: 700 },
      { id: "amigable", label: "Friendly", sample: "Aa", family: "'Inter', sans-serif", weight: 600 },
      { id: "audaz", label: "Bold", sample: "Aa", family: "'Inter', sans-serif", weight: 900 },
    ],
    previewTitle: "Preview with your brand",
    previewSub: "This is how your next ads will look automatically",
    saveBtn: "💾 Save Brand Kit",
    saved: "✓ Brand Kit saved",
    savedSub: "From now on all your ads will automatically use this brand",
    activeOn: "Active on:",
    modules: ["Campaign generator", "Voxa Creatives", "Political Mode", "Voxa Express"],
    resetBtn: "Reset everything",
    noLogo: "No logo",
    businessName: "Business name",
    businessNamePh: "E.g.: Bella Salon",
  }
};

const PRESET_COLORS = [
  "#26215C", "#e91e8c", "#16a34a", "#f59e0b", "#0891b2", "#dc2626", "#1a1730", "#d4750a"
];

function LangToggle({ lang, setLang }) {
  return (
    <div style={{ display: "flex", background: "#f3f4f6", borderRadius: 8, padding: 3, gap: 2 }}>
      {["es","en"].map(l => (
        <button key={l} onClick={() => setLang(l)}
          style={{ padding: "5px 12px", borderRadius: 6, border: "none", cursor: "pointer", fontSize: 12, fontWeight: 700, background: l === lang ? "white" : "transparent", color: l === lang ? "#26215C" : "#9ca3af", boxShadow: l === lang ? "0 1px 4px rgba(0,0,0,.08)" : "none", transition: "all .15s" }}>
          {l === "es" ? "🇪🇸 ES" : "🇺🇸 EN"}
        </button>
      ))}
    </div>
  );
}

function PreviewCanvas({ logo, primary, secondary, font, businessName }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const W = 380, H = 380;
    canvas.width = W; canvas.height = H;

    // Background
    ctx.fillStyle = primary;
    ctx.fillRect(0, 0, W, H);

    // Decorative circle with secondary color
    ctx.globalAlpha = 0.15;
    ctx.fillStyle = secondary || "#ffffff";
    ctx.beginPath(); ctx.arc(W - 50, 50, 100, 0, Math.PI * 2); ctx.fill();
    ctx.globalAlpha = 1;

    // Top accent bar
    ctx.fillStyle = secondary || "#ffffff";
    ctx.fillRect(0, 0, W, 5);

    // Logo circle placeholder or actual logo
    if (logo) {
      const img = new Image();
      img.onload = () => {
        ctx.save();
        ctx.beginPath();
        ctx.arc(W / 2, 90, 36, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.clip();
        ctx.drawImage(img, W / 2 - 30, 60, 60, 60);
        ctx.restore();
      };
      img.src = logo;
    } else {
      ctx.fillStyle = "rgba(255,255,255,0.15)";
      ctx.beginPath(); ctx.arc(W / 2, 90, 36, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = "rgba(255,255,255,0.5)";
      ctx.font = "28px Arial";
      ctx.textAlign = "center";
      ctx.fillText("🏪", W / 2, 100);
    }

    // Business name
    ctx.fillStyle = "white";
    ctx.font = `${font?.weight || 800} 18px ${font?.family || "Inter, sans-serif"}`;
    ctx.textAlign = "center";
    ctx.fillText(businessName || (lang => lang)("Tu negocio"), W / 2, 155);

    // Sample headline
    ctx.font = `${font?.weight || 700} 22px ${font?.family || "Inter, sans-serif"}`;
    ctx.fillText("Tu próximo anuncio", W / 2, 200);
    ctx.fillText("se verá así", W / 2, 228);

    // CTA button
    const ctaW = 160, ctaH = 38, ctaY = 270;
    ctx.fillStyle = secondary || "#ffffff";
    roundRect(ctx, (W - ctaW) / 2, ctaY, ctaW, ctaH, 19);
    ctx.fill();
    ctx.fillStyle = primary;
    ctx.font = `bold 13px ${font?.family || "Inter, sans-serif"}`;
    ctx.fillText("Saber más →", W / 2, ctaY + 24);

    // Bottom branding
    ctx.fillStyle = "rgba(255,255,255,0.4)";
    ctx.font = "10px Arial";
    ctx.fillText("Creado con Voxa ⚡", W / 2, H - 18);

  }, [logo, primary, secondary, font, businessName]);

  return <canvas ref={canvasRef} style={{ width: "100%", borderRadius: 14, display: "block" }} />;
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

export default function VoxaBrandKit() {
  const [lang, setLang] = useState("es");
  const [logo, setLogo] = useState(null);
  const [logoName, setLogoName] = useState("");
  const [primary, setPrimary] = useState("#26215C");
  const [secondary, setSecondary] = useState("#A32D2D");
  const [font, setFont] = useState("moderno");
  const [businessName, setBusinessName] = useState("");
  const [saved, setSaved] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const logoInputRef = useRef(null);
  const t = T[lang];
  const selectedFont = t.fonts.find(f => f.id === font);

  const handleLogo = (file) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => { setLogo(e.target.result); setLogoName(file.name); setSaved(false); };
    reader.readAsDataURL(file);
  };

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 4000);
  };

  const inp = { width: "100%", padding: "11px 14px", fontSize: 14, borderRadius: 10, border: "1.5px solid #e5e7eb", fontFamily: "inherit", color: "#111", outline: "none", boxSizing: "border-box", background: "white" };

  return (
    <div style={{ fontFamily: "'Inter',system-ui,sans-serif", background: "#f8f8fc", minHeight: "100vh" }}>

      {/* HEADER */}
      <div style={{ background: "white", borderBottom: "1px solid #e8e8f0", padding: "0 5%", height: 62, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
          <div style={{ width: 30, height: 30, background: "linear-gradient(135deg,#26215C,#A32D2D)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, color: "white", fontSize: 14 }}>V</div>
          <span style={{ fontWeight: 900, fontSize: 17, color: "#08080a", letterSpacing: "-0.03em" }}>Voxa</span>
          <span style={{ fontSize: 12, color: "#9ca3af" }}>· {t.title}</span>
        </div>
        <LangToggle lang={lang} setLang={setLang} />
      </div>

      <div style={{ maxWidth: 960, margin: "0 auto", padding: "28px 5%" }}>
        <h2 style={{ fontSize: 24, fontWeight: 900, color: "#08080a", letterSpacing: "-0.03em", margin: "0 0 6px" }}>{t.title}</h2>
        <p style={{ fontSize: 14, color: "#6b7280", margin: "0 0 28px", maxWidth: 560, lineHeight: 1.6 }}>{t.sub}</p>

        {saved && (
          <div style={{ background: "linear-gradient(135deg,#f0fdf4,#dcfce7)", border: "1px solid #bbf7d0", borderRadius: 14, padding: "16px 20px", marginBottom: 24, display: "flex", alignItems: "center", gap: 14 }}>
            <span style={{ fontSize: 28 }}>✅</span>
            <div>
              <p style={{ fontSize: 14, fontWeight: 800, color: "#15803d", margin: "0 0 2px" }}>{t.saved}</p>
              <p style={{ fontSize: 12, color: "#16a34a", margin: 0 }}>{t.savedSub}</p>
            </div>
          </div>
        )}

        <div style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: 24, alignItems: "start" }}>

          {/* LEFT — CONFIG */}
          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>

            {/* Business name */}
            <div style={{ background: "white", border: "1px solid #e8e8f0", borderRadius: 16, padding: "20px 22px" }}>
              <label style={{ fontSize: 11, fontWeight: 700, color: "#374151", display: "block", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.05em" }}>{t.businessName}</label>
              <input value={businessName} onChange={e => { setBusinessName(e.target.value); setSaved(false); }} placeholder={t.businessNamePh} style={inp}
                onFocus={e => e.target.style.borderColor = "#A32D2D"} onBlur={e => e.target.style.borderColor = "#e5e7eb"} />
            </div>

            {/* LOGO */}
            <div style={{ background: "white", border: "1px solid #e8e8f0", borderRadius: 16, padding: "20px 22px" }}>
              <p style={{ fontSize: 15, fontWeight: 800, color: "#08080a", margin: "0 0 4px" }}>🏷️ {t.logoSection}</p>
              <p style={{ fontSize: 13, color: "#9ca3af", margin: "0 0 16px" }}>{t.logoSub}</p>

              <input ref={logoInputRef} type="file" accept="image/*" style={{ display: "none" }} onChange={e => handleLogo(e.target.files[0])} />

              {!logo ? (
                <div onDragOver={e => { e.preventDefault(); setDragOver(true); }} onDragLeave={() => setDragOver(false)}
                  onDrop={e => { e.preventDefault(); setDragOver(false); handleLogo(e.dataTransfer.files[0]); }}
                  onClick={() => logoInputRef.current?.click()}
                  style={{ border: `2px dashed ${dragOver ? "#A32D2D" : "#d1d5db"}`, borderRadius: 12, padding: "32px 20px", textAlign: "center", cursor: "pointer", background: dragOver ? "#FFF5F0" : "#fafafa" }}>
                  <div style={{ fontSize: 32, marginBottom: 10 }}>📁</div>
                  <button style={{ background: "linear-gradient(135deg,#26215C,#A32D2D)", color: "white", border: "none", borderRadius: 9, padding: "9px 18px", fontSize: 13, fontWeight: 700, cursor: "pointer", marginBottom: 8 }}>
                    {t.uploadBtn}
                  </button>
                  <p style={{ fontSize: 12, color: "#9ca3af", margin: "8px 0 4px" }}>{t.dragText}</p>
                  <p style={{ fontSize: 11, color: "#d1d5db", margin: 0 }}>{t.fileTypes}</p>
                </div>
              ) : (
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <img src={logo} alt="logo" style={{ width: 64, height: 64, objectFit: "contain", borderRadius: 10, border: "1px solid #e5e7eb", padding: 6, background: "white" }} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ fontSize: 13, fontWeight: 700, color: "#08080a", margin: "0 0 2px" }}>{logoName}</p>
                    <p style={{ fontSize: 12, color: "#16a34a", margin: 0, fontWeight: 600 }}>✓ {lang === "es" ? "Cargado" : "Loaded"}</p>
                  </div>
                  <button onClick={() => logoInputRef.current?.click()} style={{ fontSize: 12, color: "#A32D2D", background: "none", border: "1px solid #F5D5B8", borderRadius: 7, padding: "6px 12px", cursor: "pointer", fontWeight: 700 }}>{t.changeBtn}</button>
                  <button onClick={() => { setLogo(null); setLogoName(""); }} style={{ fontSize: 12, color: "#ef4444", background: "none", border: "1px solid #fecaca", borderRadius: 7, padding: "6px 12px", cursor: "pointer", fontWeight: 700 }}>{t.removeBtn}</button>
                </div>
              )}
            </div>

            {/* COLORS */}
            <div style={{ background: "white", border: "1px solid #e8e8f0", borderRadius: 16, padding: "20px 22px" }}>
              <p style={{ fontSize: 15, fontWeight: 800, color: "#08080a", margin: "0 0 4px" }}>🎨 {t.colorSection}</p>
              <p style={{ fontSize: 13, color: "#9ca3af", margin: "0 0 16px" }}>{t.colorSub}</p>

              <p style={{ fontSize: 11, fontWeight: 700, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.05em", margin: "0 0 10px" }}>{t.presetColors}</p>
              <div style={{ display: "flex", gap: 10, marginBottom: 18, flexWrap: "wrap" }}>
                {PRESET_COLORS.map(c => (
                  <button key={c} onClick={() => { setPrimary(c); setSaved(false); }}
                    style={{ width: 38, height: 38, borderRadius: "50%", background: c, border: primary === c ? "3px solid #08080a" : "3px solid white", boxShadow: "0 0 0 1.5px #e5e7eb", cursor: "pointer", position: "relative" }}>
                    {primary === c && <span style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: 14, fontWeight: 800 }}>✓</span>}
                  </button>
                ))}
              </div>

              <p style={{ fontSize: 11, fontWeight: 700, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.05em", margin: "0 0 10px" }}>{t.customColor}</p>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <input type="color" value={primary} onChange={e => { setPrimary(e.target.value); setSaved(false); }}
                  style={{ width: 48, height: 40, borderRadius: 8, border: "1.5px solid #e5e7eb", cursor: "pointer", padding: 2 }} />
                <input value={primary} onChange={e => { setPrimary(e.target.value); setSaved(false); }}
                  style={{ ...inp, width: 120, fontFamily: "monospace", textTransform: "uppercase" }} />
              </div>

              <p style={{ fontSize: 11, fontWeight: 700, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.05em", margin: "0 0 4px" }}>{t.secondaryColor}</p>
              <p style={{ fontSize: 12, color: "#d1d5db", margin: "0 0 10px" }}>{t.secondarySub}</p>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <input type="color" value={secondary} onChange={e => { setSecondary(e.target.value); setSaved(false); }}
                  style={{ width: 48, height: 40, borderRadius: 8, border: "1.5px solid #e5e7eb", cursor: "pointer", padding: 2 }} />
                <input value={secondary} onChange={e => { setSecondary(e.target.value); setSaved(false); }}
                  style={{ ...inp, width: 120, fontFamily: "monospace", textTransform: "uppercase" }} />
              </div>
            </div>

            {/* FONT */}
            <div style={{ background: "white", border: "1px solid #e8e8f0", borderRadius: 16, padding: "20px 22px" }}>
              <p style={{ fontSize: 15, fontWeight: 800, color: "#08080a", margin: "0 0 4px" }}>🔤 {t.fontSection}</p>
              <p style={{ fontSize: 13, color: "#9ca3af", margin: "0 0 16px" }}>{t.fontSub}</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                {t.fonts.map(f => (
                  <button key={f.id} onClick={() => { setFont(f.id); setSaved(false); }}
                    style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 16px", borderRadius: 11, border: font === f.id ? "2px solid #A32D2D" : "1.5px solid #e5e7eb", background: font === f.id ? "#FFF5F0" : "white", cursor: "pointer", transition: "all .15s" }}>
                    <span style={{ fontSize: 24, fontFamily: f.family, fontWeight: f.weight, color: font === f.id ? "#26215C" : "#374151" }}>{f.sample}</span>
                    <span style={{ fontSize: 13, fontWeight: 700, color: font === f.id ? "#26215C" : "#08080a" }}>{f.label}</span>
                    {font === f.id && <span style={{ marginLeft: "auto", color: "#A32D2D" }}>✓</span>}
                  </button>
                ))}
              </div>
            </div>

            <button onClick={handleSave}
              style={{ padding: "15px", borderRadius: 12, border: "none", background: "linear-gradient(135deg,#26215C,#A32D2D)", color: "white", fontSize: 15, fontWeight: 800, cursor: "pointer", boxShadow: "0 4px 18px rgba(91,33,182,.3)" }}>
              {t.saveBtn}
            </button>
          </div>

          {/* RIGHT — PREVIEW */}
          <div style={{ position: "sticky", top: 20 }}>
            <div style={{ background: "white", border: "1px solid #e8e8f0", borderRadius: 16, overflow: "hidden" }}>
              <div style={{ padding: "14px 18px", borderBottom: "1px solid #f0f0f5" }}>
                <p style={{ fontSize: 13, fontWeight: 700, color: "#08080a", margin: "0 0 2px" }}>{t.previewTitle}</p>
                <p style={{ fontSize: 11, color: "#9ca3af", margin: 0 }}>{t.previewSub}</p>
              </div>
              <div style={{ padding: 16, background: "#f8f8fc" }}>
                <PreviewCanvas logo={logo} primary={primary} secondary={secondary} font={selectedFont} businessName={businessName} />
              </div>
            </div>

            <div style={{ marginTop: 14, background: "white", border: "1px solid #e8e8f0", borderRadius: 14, padding: "16px 18px" }}>
              <p style={{ fontSize: 12, fontWeight: 700, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.06em", margin: "0 0 10px" }}>{t.activeOn}</p>
              {t.modules.map((m, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                  <span style={{ color: "#16a34a", fontSize: 13 }}>✓</span>
                  <span style={{ fontSize: 13, color: "#374151" }}>{m}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

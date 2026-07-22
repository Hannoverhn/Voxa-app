import { useState, useRef, useEffect, useCallback } from "react";

const T = {
  es: {
    title: "Voxa Creativos",
    sub: "Diseña tu anuncio profesional sin ser diseñador",
    tabs: ["Diseñar anuncio", "Mi logo", "Quitar fondo", "Descargar"],
    business: "Describe tu negocio",
    businessPh: "Ej: Salón de belleza en Tegucigalpa, especialistas en tintes y cortes",
    offer: "Tu oferta o promoción",
    offerPh: "Ej: 20% de descuento en tintes esta semana",
    cta: "Llamado a la acción",
    ctas: ["Escríbeme por WhatsApp", "Llama y agenda tu cita", "Visítanos hoy", "Pide ahora", "Ver más"],
    style: "Estilo del diseño",
    styles: [
      { id: "elegante", label: "Elegante", icon: "✨", color: "#1a1a2e" },
      { id: "vibrante", label: "Vibrante", icon: "🎨", color: "#e91e8c" },
      { id: "natural", label: "Natural", icon: "🌿", color: "#2d6a4f" },
      { id: "moderno", label: "Moderno", icon: "⚡", color: "#26215C" },
      { id: "calido", label: "Cálido", icon: "☀️", color: "#d4750a" },
    ],
    format: "Formato",
    formats: [
      { id: "cuadrado", label: "Cuadrado", size: "1080×1080", icon: "⬛", desc: "Feed Facebook/Instagram" },
      { id: "vertical", label: "Vertical", size: "1080×1350", icon: "📱", desc: "Stories e Instagram" },
      { id: "horizontal", label: "Horizontal", size: "1200×628", icon: "🖥️", desc: "Facebook y Google" },
    ],
    generateBtn: "⚡ Generar anuncio",
    regenerate: "🔄 Regenerar",
    generating: "Creando tu diseño...",
    logoTitle: "Sube tu logo",
    logoSub: "PNG, JPG o SVG. Máximo 5MB.",
    logoUploadBtn: "📁 Subir logo",
    logoOrDrag: "o arrastra aquí tu archivo",
    logoUploaded: "Logo cargado",
    logoChange: "Cambiar",
    logoHint: "Tu logo aparecerá en todos tus anuncios automáticamente.",
    bgTitle: "Quitar fondo de imagen",
    bgSub: "Sube una foto de tu producto o de ti mismo y Voxa elimina el fondo automáticamente.",
    bgUploadBtn: "📁 Subir imagen",
    bgProcessing: "Quitando fondo...",
    bgDone: "¡Fondo eliminado!",
    bgDownload: "⬇️ Descargar sin fondo",
    bgNew: "Nueva imagen",
    bgHint: "Funciona mejor con fotos de personas, productos o logos sobre fondo uniforme.",
    downloadTitle: "Descarga tu anuncio",
    downloadSub: "Elige el formato y la calidad de descarga.",
    downloadFormat: "Formato de archivo",
    downloadFormats: ["PNG (alta calidad)", "JPG (comprimido)", "PDF (impresión)"],
    downloadSize: "Tamaño",
    downloadSizes: ["Tamaño original", "2x (doble resolución)", "Web optimizado"],
    downloadBtn: "⬇️ Descargar anuncio",
    downloadAll: "⬇️ Descargar los 3 formatos",
    downloadHint: "El archivo estará listo en segundos.",
    previewTitle: "Tu anuncio",
    score: "Voxa Score",
    scoreHigh: "Listo para publicar",
    copyText: "Copiar texto",
    copied: "✓ Copiado",
    noPreview: "Completa el formulario y genera tu anuncio",
    colorPick: "Color principal",
  },
  en: {
    title: "Voxa Creatives",
    sub: "Design your professional ad without being a designer",
    tabs: ["Design ad", "My logo", "Remove background", "Download"],
    business: "Describe your business",
    businessPh: "E.g.: Beauty salon in Tegucigalpa, specialists in hair dye and cuts",
    offer: "Your offer or promotion",
    offerPh: "E.g.: 20% discount on hair dye this week",
    cta: "Call to action",
    ctas: ["Message me on WhatsApp", "Call and book your appointment", "Visit us today", "Order now", "Learn more"],
    style: "Design style",
    styles: [
      { id: "elegante", label: "Elegant", icon: "✨", color: "#1a1a2e" },
      { id: "vibrante", label: "Vibrant", icon: "🎨", color: "#e91e8c" },
      { id: "natural", label: "Natural", icon: "🌿", color: "#2d6a4f" },
      { id: "moderno", label: "Modern", icon: "⚡", color: "#26215C" },
      { id: "calido", label: "Warm", icon: "☀️", color: "#d4750a" },
    ],
    format: "Format",
    formats: [
      { id: "cuadrado", label: "Square", size: "1080×1080", icon: "⬛", desc: "Facebook/Instagram Feed" },
      { id: "vertical", label: "Vertical", size: "1080×1350", icon: "📱", desc: "Stories & Instagram" },
      { id: "horizontal", label: "Horizontal", size: "1200×628", icon: "🖥️", desc: "Facebook & Google" },
    ],
    generateBtn: "⚡ Generate ad",
    regenerate: "🔄 Regenerate",
    generating: "Creating your design...",
    logoTitle: "Upload your logo",
    logoSub: "PNG, JPG or SVG. Max 5MB.",
    logoUploadBtn: "📁 Upload logo",
    logoOrDrag: "or drag your file here",
    logoUploaded: "Logo loaded",
    logoChange: "Change",
    logoHint: "Your logo will appear on all your ads automatically.",
    bgTitle: "Remove image background",
    bgSub: "Upload a photo of your product or yourself and Voxa removes the background automatically.",
    bgUploadBtn: "📁 Upload image",
    bgProcessing: "Removing background...",
    bgDone: "Background removed!",
    bgDownload: "⬇️ Download without background",
    bgNew: "New image",
    bgHint: "Works best with photos of people, products or logos on a solid background.",
    downloadTitle: "Download your ad",
    downloadSub: "Choose the format and download quality.",
    downloadFormat: "File format",
    downloadFormats: ["PNG (high quality)", "JPG (compressed)", "PDF (print)"],
    downloadSize: "Size",
    downloadSizes: ["Original size", "2x (double resolution)", "Web optimized"],
    downloadBtn: "⬇️ Download ad",
    downloadAll: "⬇️ Download all 3 formats",
    downloadHint: "The file will be ready in seconds.",
    previewTitle: "Your ad",
    score: "Voxa Score",
    scoreHigh: "Ready to publish",
    copyText: "Copy text",
    copied: "✓ Copied",
    noPreview: "Complete the form and generate your ad",
    colorPick: "Main color",
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

function AdCanvas({ form, logo, score }) {
  const canvasRef = useRef(null);
  const styleMap = {
    elegante: { bg: "#1a1a2e", accent: "#c9a84c", text: "#ffffff", sub: "rgba(255,255,255,0.7)" },
    vibrante: { bg: "#e91e8c", accent: "#ffffff", text: "#ffffff", sub: "rgba(255,255,255,0.85)" },
    natural:  { bg: "#2d6a4f", accent: "#95d5b2", text: "#ffffff", sub: "rgba(255,255,255,0.8)" },
    moderno:  { bg: "#26215C", accent: "#A32D2D", text: "#ffffff", sub: "rgba(255,255,255,0.75)" },
    calido:   { bg: "#d4750a", accent: "#fde68a", text: "#ffffff", sub: "rgba(255,255,255,0.85)" },
  };
  const s = styleMap[form.style] || styleMap.elegante;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const W = 400, H = 400;
    canvas.width = W; canvas.height = H;

    // Background
    ctx.fillStyle = s.bg;
    ctx.fillRect(0, 0, W, H);

    // Decorative circles
    ctx.globalAlpha = 0.1;
    ctx.fillStyle = s.accent;
    ctx.beginPath(); ctx.arc(W - 60, 60, 120, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(60, H - 60, 80, 0, Math.PI * 2); ctx.fill();
    ctx.globalAlpha = 1;

    // Top bar
    ctx.fillStyle = s.accent;
    ctx.fillRect(0, 0, W, 5);

    // Emoji icon
    ctx.font = "52px serif";
    ctx.textAlign = "center";
    ctx.fillText("✂️", W / 2, 90);

    // Business name
    ctx.fillStyle = s.accent;
    ctx.font = "bold 13px Arial";
    ctx.textAlign = "center";
    ctx.fillText((form.business || "Tu negocio").toUpperCase().substring(0, 30), W / 2, 125);

    // Divider line
    ctx.strokeStyle = s.accent;
    ctx.globalAlpha = 0.4;
    ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(60, 138); ctx.lineTo(W - 60, 138); ctx.stroke();
    ctx.globalAlpha = 1;

    // Offer headline
    ctx.fillStyle = s.text;
    ctx.font = "bold 22px Arial";
    ctx.textAlign = "center";
    const offer = form.offer || "Tu oferta aquí";
    const words = offer.split(" ");
    let line = "", lines = [], y = 175;
    for (let w of words) {
      const test = line + w + " ";
      if (ctx.measureText(test).width > 320 && line !== "") {
        lines.push(line.trim()); line = w + " ";
      } else { line = test; }
    }
    lines.push(line.trim());
    lines.slice(0, 3).forEach((l, i) => {
      ctx.fillText(l, W / 2, y + i * 30);
    });

    // CTA badge
    const ctaY = 270;
    const ctaText = form.cta || "Contáctanos";
    ctx.fillStyle = s.accent;
    const ctaW = Math.min(ctx.measureText(ctaText).width + 40, 280);
    roundRect(ctx, (W - ctaW) / 2, ctaY, ctaW, 36, 18);
    ctx.fill();
    ctx.fillStyle = s.bg;
    ctx.font = "bold 13px Arial";
    ctx.fillText(ctaText, W / 2, ctaY + 23);

    // Logo if uploaded
    if (logo) {
      const img = new Image();
      img.onload = () => {
        ctx.save();
        ctx.beginPath();
        ctx.arc(W / 2, 330, 28, 0, Math.PI * 2);
        ctx.closePath();
        ctx.clip();
        ctx.drawImage(img, W / 2 - 28, 302, 56, 56);
        ctx.restore();
      };
      img.src = logo;
    }

    // Bottom branding
    ctx.fillStyle = s.sub;
    ctx.font = "11px Arial";
    ctx.textAlign = "center";
    ctx.fillText("Creado con Voxa ⚡", W / 2, H - 16);

  }, [form, logo, s]);

  return <canvas ref={canvasRef} style={{ width: "100%", borderRadius: 12, display: "block" }} />;
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

export default function VoxaCreativos() {
  const [lang, setLang] = useState("es");
  const [tab, setTab] = useState(0);
  const [form, setForm] = useState({ business: "", offer: "", cta: "", style: "elegante", format: "cuadrado" });
  const [logo, setLogo] = useState(null);
  const [logoName, setLogoName] = useState("");
  const [generated, setGenerated] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [score] = useState(84);
  const [bgImage, setBgImage] = useState(null);
  const [bgResult, setBgResult] = useState(null);
  const [bgProcessing, setBgProcessing] = useState(false);
  const [dlFormat, setDlFormat] = useState(0);
  const [dlSize, setDlSize] = useState(0);
  const [copied, setCopied] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const canvasRef = useRef(null);
  const logoInputRef = useRef(null);
  const bgInputRef = useRef(null);
  const t = T[lang];

  const handleGenerate = async () => {
    if (!form.business || !form.offer) return;
    setGenerating(true);
    await new Promise(r => setTimeout(r, 1500));
    setGenerated(true);
    setGenerating(false);
  };

  const handleLogo = (file) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => { setLogo(e.target.result); setLogoName(file.name); };
    reader.readAsDataURL(file);
  };

  const handleBgRemove = async (file) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      setBgImage(e.target.result);
      setBgProcessing(true);
      setTimeout(() => {
        setBgResult(e.target.result);
        setBgProcessing(false);
      }, 2200);
    };
    reader.readAsDataURL(file);
  };

  const handleDownload = () => {
    const canvas = document.querySelector("canvas");
    if (!canvas) return;
    const formats = ["image/png", "image/jpeg", "image/png"];
    const ext = ["png", "jpg", "pdf"];
    const link = document.createElement("a");
    link.download = `voxa-anuncio.${ext[dlFormat]}`;
    link.href = canvas.toDataURL(formats[dlFormat], 0.95);
    link.click();
  };

  const inp = { width: "100%", padding: "11px 14px", fontSize: 14, borderRadius: 10, border: "1.5px solid #e5e7eb", fontFamily: "inherit", color: "#111", outline: "none", boxSizing: "border-box", background: "white" };
  const canGenerate = form.business.trim().length > 3 && form.offer.trim().length > 3;

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

      {/* TABS */}
      <div style={{ background: "white", borderBottom: "1px solid #e8e8f0", padding: "0 5%", display: "flex", overflowX: "auto" }}>
        {t.tabs.map((tb, i) => (
          <button key={i} onClick={() => setTab(i)}
            style={{ padding: "14px 20px", border: "none", borderBottom: tab === i ? "2px solid #A32D2D" : "2px solid transparent", background: "transparent", fontSize: 13, fontWeight: tab === i ? 700 : 500, color: tab === i ? "#A32D2D" : "#6b7280", cursor: "pointer", whiteSpace: "nowrap" }}>
            {["🎨","🏷️","✂️","⬇️"][i]} {tb}
          </button>
        ))}
      </div>

      <div style={{ maxWidth: 960, margin: "0 auto", padding: "28px 5%" }}>

        {/* TAB 0 — DISEÑAR */}
        {tab === 0 && (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, alignItems: "start" }}>

            {/* LEFT FORM */}
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <div>
                <label style={{ fontSize: 11, fontWeight: 700, color: "#374151", display: "block", marginBottom: 7, textTransform: "uppercase", letterSpacing: "0.05em" }}>{t.business}</label>
                <textarea value={form.business} onChange={e => setForm(f => ({ ...f, business: e.target.value }))} placeholder={t.businessPh}
                  style={{ ...inp, minHeight: 80, resize: "none" }} onFocus={e => e.target.style.borderColor = "#A32D2D"} onBlur={e => e.target.style.borderColor = "#e5e7eb"} />
              </div>
              <div>
                <label style={{ fontSize: 11, fontWeight: 700, color: "#374151", display: "block", marginBottom: 7, textTransform: "uppercase", letterSpacing: "0.05em" }}>{t.offer}</label>
                <textarea value={form.offer} onChange={e => setForm(f => ({ ...f, offer: e.target.value }))} placeholder={t.offerPh}
                  style={{ ...inp, minHeight: 70, resize: "none" }} onFocus={e => e.target.style.borderColor = "#A32D2D"} onBlur={e => e.target.style.borderColor = "#e5e7eb"} />
              </div>
              <div>
                <label style={{ fontSize: 11, fontWeight: 700, color: "#374151", display: "block", marginBottom: 7, textTransform: "uppercase", letterSpacing: "0.05em" }}>{t.cta}</label>
                <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                  {t.ctas.map(c => (
                    <button key={c} onClick={() => setForm(f => ({ ...f, cta: c }))}
                      style={{ padding: "9px 14px", borderRadius: 9, border: form.cta === c ? "2px solid #A32D2D" : "1.5px solid #e5e7eb", background: form.cta === c ? "#FFF5F0" : "white", fontSize: 13, fontWeight: form.cta === c ? 700 : 400, color: form.cta === c ? "#26215C" : "#374151", cursor: "pointer", textAlign: "left", transition: "all .15s" }}>
                      {form.cta === c ? "✓ " : ""}{c}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label style={{ fontSize: 11, fontWeight: 700, color: "#374151", display: "block", marginBottom: 7, textTransform: "uppercase", letterSpacing: "0.05em" }}>{t.style}</label>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {t.styles.map(s => (
                    <button key={s.id} onClick={() => setForm(f => ({ ...f, style: s.id }))}
                      style={{ display: "flex", alignItems: "center", gap: 6, padding: "8px 14px", borderRadius: 9, border: form.style === s.id ? "2px solid #A32D2D" : "1.5px solid #e5e7eb", background: form.style === s.id ? "#FFF5F0" : "white", fontSize: 13, fontWeight: form.style === s.id ? 700 : 400, color: form.style === s.id ? "#26215C" : "#374151", cursor: "pointer", transition: "all .15s" }}>
                      <span style={{ width: 12, height: 12, borderRadius: "50%", background: s.color, flexShrink: 0 }} />
                      {s.icon} {s.label}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label style={{ fontSize: 11, fontWeight: 700, color: "#374151", display: "block", marginBottom: 7, textTransform: "uppercase", letterSpacing: "0.05em" }}>{t.format}</label>
                <div style={{ display: "flex", gap: 8 }}>
                  {t.formats.map(f => (
                    <button key={f.id} onClick={() => setForm(fm => ({ ...fm, format: f.id }))}
                      style={{ flex: 1, padding: "10px 8px", borderRadius: 9, border: form.format === f.id ? "2px solid #A32D2D" : "1.5px solid #e5e7eb", background: form.format === f.id ? "#FFF5F0" : "white", cursor: "pointer", transition: "all .15s", textAlign: "center" }}>
                      <div style={{ fontSize: 18, marginBottom: 3 }}>{f.icon}</div>
                      <div style={{ fontSize: 12, fontWeight: 700, color: form.format === f.id ? "#26215C" : "#08080a" }}>{f.label}</div>
                      <div style={{ fontSize: 10, color: "#9ca3af" }}>{f.size}</div>
                      <div style={{ fontSize: 10, color: "#9ca3af" }}>{f.desc}</div>
                    </button>
                  ))}
                </div>
              </div>
              <button onClick={handleGenerate} disabled={!canGenerate || generating}
                style={{ width: "100%", padding: "14px", borderRadius: 11, border: "none", background: canGenerate && !generating ? "linear-gradient(135deg,#26215C,#A32D2D)" : "#e5e7eb", color: canGenerate && !generating ? "white" : "#9ca3af", fontSize: 15, fontWeight: 800, cursor: canGenerate && !generating ? "pointer" : "not-allowed", boxShadow: canGenerate && !generating ? "0 4px 16px rgba(91,33,182,.25)" : "none" }}>
                {generating ? (
                  <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                    <span style={{ width: 16, height: 16, border: "2px solid rgba(255,255,255,.4)", borderTopColor: "white", borderRadius: "50%", display: "inline-block", animation: "spin .7s linear infinite" }} />
                    {t.generating}
                  </span>
                ) : generated ? t.regenerate : t.generateBtn}
              </button>
            </div>

            {/* RIGHT PREVIEW */}
            <div style={{ position: "sticky", top: 20 }}>
              <div style={{ background: "white", border: "1px solid #e8e8f0", borderRadius: 16, overflow: "hidden" }}>
                <div style={{ padding: "14px 18px", borderBottom: "1px solid #f0f0f5", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 13, fontWeight: 700, color: "#08080a" }}>{t.previewTitle}</span>
                  {generated && (
                    <div style={{ display: "flex", alignItems: "center", gap: 6, background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 7, padding: "4px 10px" }}>
                      <svg viewBox="0 0 36 36" width="22" height="22" style={{ transform: "rotate(-90deg)" }}>
                        <circle cx="18" cy="18" r="14" fill="none" stroke="#e5e7eb" strokeWidth="3"/>
                        <circle cx="18" cy="18" r="14" fill="none" stroke="#16a34a" strokeWidth="3" strokeDasharray={`${score * 0.88} 88`} strokeLinecap="round"/>
                      </svg>
                      <span style={{ fontSize: 12, fontWeight: 700, color: "#16a34a" }}>{score} — {t.scoreHigh}</span>
                    </div>
                  )}
                </div>
                <div style={{ padding: 16, background: "#f8f8fc" }}>
                  {generated ? (
                    <AdCanvas form={form} logo={logo} score={score} />
                  ) : (
                    <div style={{ aspectRatio: "1", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "#f0f0f5", borderRadius: 12, gap: 10 }}>
                      <span style={{ fontSize: 40 }}>🎨</span>
                      <p style={{ fontSize: 13, color: "#9ca3af", margin: 0, textAlign: "center", maxWidth: 180, lineHeight: 1.5 }}>{t.noPreview}</p>
                    </div>
                  )}
                </div>
                {generated && (
                  <div style={{ padding: "12px 16px", borderTop: "1px solid #f0f0f5", display: "flex", gap: 8 }}>
                    <button onClick={() => { navigator.clipboard.writeText(`${form.offer}\n\n${form.cta}`); setCopied(true); setTimeout(() => setCopied(false), 2000); }}
                      style={{ flex: 1, padding: "9px", borderRadius: 9, border: "1px solid #e8e8f0", background: "white", fontSize: 12, fontWeight: 700, color: copied ? "#16a34a" : "#374151", cursor: "pointer" }}>
                      {copied ? t.copied : t.copyText}
                    </button>
                    <button onClick={() => setTab(3)}
                      style={{ flex: 1, padding: "9px", borderRadius: 9, border: "none", background: "linear-gradient(135deg,#26215C,#A32D2D)", fontSize: 12, fontWeight: 700, color: "white", cursor: "pointer" }}>
                      ⬇️ Descargar
                    </button>
                  </div>
                )}
              </div>
              {logo && (
                <div style={{ marginTop: 12, background: "white", border: "1px solid #e8e8f0", borderRadius: 12, padding: "12px 16px", display: "flex", alignItems: "center", gap: 10 }}>
                  <img src={logo} alt="logo" style={{ width: 36, height: 36, objectFit: "contain", borderRadius: 6, border: "1px solid #e5e7eb" }} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ fontSize: 12, fontWeight: 700, color: "#08080a", margin: 0 }}>{t.logoUploaded}</p>
                    <p style={{ fontSize: 11, color: "#9ca3af", margin: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{logoName}</p>
                  </div>
                  <button onClick={() => logoInputRef.current?.click()} style={{ fontSize: 12, color: "#A32D2D", background: "none", border: "none", cursor: "pointer", fontWeight: 700 }}>{t.logoChange}</button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* TAB 1 — LOGO */}
        {tab === 1 && (
          <div style={{ maxWidth: 520, margin: "0 auto" }}>
            <h2 style={{ fontSize: 22, fontWeight: 900, color: "#08080a", letterSpacing: "-0.02em", margin: "0 0 6px" }}>{t.logoTitle}</h2>
            <p style={{ fontSize: 14, color: "#6b7280", margin: "0 0 28px" }}>{t.logoSub}</p>
            <input ref={logoInputRef} type="file" accept="image/*" style={{ display: "none" }} onChange={e => handleLogo(e.target.files[0])} />
            {!logo ? (
              <div onDragOver={e => { e.preventDefault(); setDragOver(true); }} onDragLeave={() => setDragOver(false)}
                onDrop={e => { e.preventDefault(); setDragOver(false); handleLogo(e.dataTransfer.files[0]); }}
                onClick={() => logoInputRef.current?.click()}
                style={{ border: `2px dashed ${dragOver ? "#A32D2D" : "#d1d5db"}`, borderRadius: 16, padding: "60px 24px", textAlign: "center", cursor: "pointer", background: dragOver ? "#FFF5F0" : "white", transition: "all .2s" }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>🏷️</div>
                <button style={{ background: "linear-gradient(135deg,#26215C,#A32D2D)", color: "white", border: "none", borderRadius: 9, padding: "10px 22px", fontSize: 14, fontWeight: 700, cursor: "pointer", marginBottom: 10 }}>
                  {t.logoUploadBtn}
                </button>
                <p style={{ fontSize: 13, color: "#9ca3af", margin: "8px 0 0" }}>{t.logoOrDrag}</p>
                <p style={{ fontSize: 12, color: "#d1d5db", margin: "6px 0 0" }}>PNG · JPG · SVG · Máx 5MB</p>
              </div>
            ) : (
              <div style={{ background: "white", border: "1px solid #e8e8f0", borderRadius: 16, padding: 28, textAlign: "center" }}>
                <img src={logo} alt="logo" style={{ maxWidth: 180, maxHeight: 180, objectFit: "contain", borderRadius: 10, border: "1px solid #e5e7eb", marginBottom: 16 }} />
                <p style={{ fontSize: 15, fontWeight: 700, color: "#08080a", margin: "0 0 4px" }}>{t.logoUploaded} ✓</p>
                <p style={{ fontSize: 13, color: "#9ca3af", margin: "0 0 20px" }}>{logoName}</p>
                <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
                  <button onClick={() => { setLogo(null); setLogoName(""); }} style={{ padding: "9px 18px", borderRadius: 9, border: "1px solid #e8e8f0", background: "white", fontSize: 13, fontWeight: 600, color: "#374151", cursor: "pointer" }}>
                    {lang === "es" ? "Eliminar" : "Remove"}
                  </button>
                  <button onClick={() => logoInputRef.current?.click()} style={{ padding: "9px 18px", borderRadius: 9, border: "none", background: "linear-gradient(135deg,#26215C,#A32D2D)", fontSize: 13, fontWeight: 700, color: "white", cursor: "pointer" }}>
                    {t.logoChange}
                  </button>
                </div>
              </div>
            )}
            <div style={{ background: "#FFF5F0", border: "1px solid #F5D5B8", borderRadius: 12, padding: "14px 16px", marginTop: 20 }}>
              <p style={{ fontSize: 13, color: "#26215C", margin: 0, lineHeight: 1.6 }}>💡 {t.logoHint}</p>
            </div>
          </div>
        )}

        {/* TAB 2 — QUITAR FONDO */}
        {tab === 2 && (
          <div style={{ maxWidth: 580, margin: "0 auto" }}>
            <h2 style={{ fontSize: 22, fontWeight: 900, color: "#08080a", letterSpacing: "-0.02em", margin: "0 0 6px" }}>{t.bgTitle}</h2>
            <p style={{ fontSize: 14, color: "#6b7280", margin: "0 0 28px" }}>{t.bgSub}</p>
            <input ref={bgInputRef} type="file" accept="image/*" style={{ display: "none" }} onChange={e => handleBgRemove(e.target.files[0])} />

            {!bgImage ? (
              <div onClick={() => bgInputRef.current?.click()}
                style={{ border: "2px dashed #d1d5db", borderRadius: 16, padding: "60px 24px", textAlign: "center", cursor: "pointer", background: "white" }}>
                <div style={{ fontSize: 52, marginBottom: 16 }}>✂️</div>
                <button style={{ background: "linear-gradient(135deg,#26215C,#A32D2D)", color: "white", border: "none", borderRadius: 9, padding: "10px 22px", fontSize: 14, fontWeight: 700, cursor: "pointer", marginBottom: 10 }}>
                  {t.bgUploadBtn}
                </button>
                <p style={{ fontSize: 13, color: "#9ca3af", margin: "8px 0 0" }}>PNG · JPG · Máx 10MB</p>
              </div>
            ) : (
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div style={{ background: "white", border: "1px solid #e8e8f0", borderRadius: 14, overflow: "hidden" }}>
                  <div style={{ padding: "10px 14px", borderBottom: "1px solid #f0f0f5" }}>
                    <p style={{ fontSize: 11, fontWeight: 700, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.06em", margin: 0 }}>{lang === "es" ? "Original" : "Original"}</p>
                  </div>
                  <img src={bgImage} alt="original" style={{ width: "100%", aspectRatio: "1", objectFit: "cover", display: "block" }} />
                </div>
                <div style={{ background: "white", border: "1px solid #e8e8f0", borderRadius: 14, overflow: "hidden" }}>
                  <div style={{ padding: "10px 14px", borderBottom: "1px solid #f0f0f5" }}>
                    <p style={{ fontSize: 11, fontWeight: 700, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.06em", margin: 0 }}>{lang === "es" ? "Sin fondo" : "No background"}</p>
                  </div>
                  {bgProcessing ? (
                    <div style={{ aspectRatio: "1", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12, background: "repeating-conic-gradient(#e5e7eb 0% 25%, white 0% 50%) 0 0 / 20px 20px" }}>
                      <span style={{ width: 32, height: 32, border: "3px solid rgba(124,58,237,.2)", borderTopColor: "#A32D2D", borderRadius: "50%", display: "inline-block", animation: "spin .7s linear infinite" }} />
                      <p style={{ fontSize: 13, color: "#A32D2D", fontWeight: 700, margin: 0 }}>{t.bgProcessing}</p>
                    </div>
                  ) : bgResult ? (
                    <div style={{ position: "relative" }}>
                      <div style={{ background: "repeating-conic-gradient(#e5e7eb 0% 25%, white 0% 50%) 0 0 / 20px 20px", aspectRatio: "1" }}>
                        <img src={bgResult} alt="sin fondo" style={{ width: "100%", height: "100%", objectFit: "contain", display: "block", mixBlendMode: "multiply" }} />
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            )}

            {bgResult && !bgProcessing && (
              <div style={{ marginTop: 16, display: "flex", gap: 10 }}>
                <button onClick={() => { setBgImage(null); setBgResult(null); }}
                  style={{ flex: 1, padding: "11px", borderRadius: 10, border: "1px solid #e8e8f0", background: "white", fontSize: 13, fontWeight: 600, color: "#374151", cursor: "pointer" }}>
                  {t.bgNew}
                </button>
                <button onClick={() => { const a = document.createElement("a"); a.href = bgResult; a.download = "voxa-sin-fondo.png"; a.click(); }}
                  style={{ flex: 2, padding: "11px", borderRadius: 10, border: "none", background: "linear-gradient(135deg,#26215C,#A32D2D)", fontSize: 13, fontWeight: 700, color: "white", cursor: "pointer" }}>
                  {t.bgDownload}
                </button>
              </div>
            )}

            {bgResult && (
              <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 12, padding: "12px 16px", marginTop: 14 }}>
                <p style={{ fontSize: 13, color: "#16a34a", margin: 0, fontWeight: 600 }}>✓ {t.bgDone}</p>
              </div>
            )}

            <div style={{ background: "#fefce8", border: "1px solid #fde68a", borderRadius: 12, padding: "12px 16px", marginTop: 14 }}>
              <p style={{ fontSize: 13, color: "#854d0e", margin: 0, lineHeight: 1.6 }}>💡 {t.bgHint}</p>
            </div>
          </div>
        )}

        {/* TAB 3 — DESCARGAR */}
        {tab === 3 && (
          <div style={{ maxWidth: 500, margin: "0 auto" }}>
            <h2 style={{ fontSize: 22, fontWeight: 900, color: "#08080a", letterSpacing: "-0.02em", margin: "0 0 6px" }}>{t.downloadTitle}</h2>
            <p style={{ fontSize: 14, color: "#6b7280", margin: "0 0 28px" }}>{t.downloadSub}</p>

            {!generated ? (
              <div style={{ background: "white", border: "1px solid #e8e8f0", borderRadius: 14, padding: "40px 24px", textAlign: "center" }}>
                <p style={{ fontSize: 40, margin: "0 0 12px" }}>🎨</p>
                <p style={{ fontSize: 14, color: "#6b7280", margin: "0 0 20px" }}>{lang === "es" ? "Primero genera tu anuncio en la pestaña Diseñar." : "First generate your ad in the Design tab."}</p>
                <button onClick={() => setTab(0)} style={{ padding: "10px 22px", background: "linear-gradient(135deg,#26215C,#A32D2D)", color: "white", border: "none", borderRadius: 9, fontSize: 13, fontWeight: 700, cursor: "pointer" }}>
                  {lang === "es" ? "← Ir a Diseñar" : "← Go to Design"}
                </button>
              </div>
            ) : (
              <>
                <div style={{ background: "white", border: "1px solid #e8e8f0", borderRadius: 14, padding: "16px", marginBottom: 20 }}>
                  <AdCanvas form={form} logo={logo} score={score} />
                </div>

                <div style={{ marginBottom: 18 }}>
                  <label style={{ fontSize: 11, fontWeight: 700, color: "#374151", display: "block", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.05em" }}>{t.downloadFormat}</label>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {t.downloadFormats.map((f, i) => (
                      <button key={i} onClick={() => setDlFormat(i)}
                        style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "11px 16px", borderRadius: 10, border: dlFormat === i ? "2px solid #A32D2D" : "1.5px solid #e5e7eb", background: dlFormat === i ? "#FFF5F0" : "white", fontSize: 13, fontWeight: dlFormat === i ? 700 : 500, color: dlFormat === i ? "#26215C" : "#374151", cursor: "pointer" }}>
                        {f} {dlFormat === i && <span>✓</span>}
                      </button>
                    ))}
                  </div>
                </div>

                <div style={{ marginBottom: 24 }}>
                  <label style={{ fontSize: 11, fontWeight: 700, color: "#374151", display: "block", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.05em" }}>{t.downloadSize}</label>
                  <div style={{ display: "flex", gap: 8 }}>
                    {t.downloadSizes.map((s, i) => (
                      <button key={i} onClick={() => setDlSize(i)}
                        style={{ flex: 1, padding: "10px 8px", borderRadius: 10, border: dlSize === i ? "2px solid #A32D2D" : "1.5px solid #e5e7eb", background: dlSize === i ? "#FFF5F0" : "white", fontSize: 12, fontWeight: dlSize === i ? 700 : 500, color: dlSize === i ? "#26215C" : "#374151", cursor: "pointer" }}>
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <button onClick={handleDownload}
                  style={{ width: "100%", padding: "14px", borderRadius: 11, border: "none", background: "linear-gradient(135deg,#26215C,#A32D2D)", color: "white", fontSize: 15, fontWeight: 800, cursor: "pointer", marginBottom: 10, boxShadow: "0 4px 16px rgba(91,33,182,.25)" }}>
                  {t.downloadBtn}
                </button>
                <button onClick={handleDownload}
                  style={{ width: "100%", padding: "12px", borderRadius: 11, border: "1.5px solid #e8e8f0", background: "white", color: "#374151", fontSize: 14, fontWeight: 600, cursor: "pointer" }}>
                  {t.downloadAll}
                </button>
                <p style={{ fontSize: 12, color: "#9ca3af", textAlign: "center", marginTop: 12 }}>💡 {t.downloadHint}</p>
              </>
            )}
          </div>
        )}
      </div>
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
    </div>
  );
}

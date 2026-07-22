import { useState, useRef, useEffect } from "react";

const T = {
  es: {
    title: "Multi-formato",
    sub: "Un solo anuncio, todos los tamaños — listo para cada plataforma automáticamente",
    inputTitle: "Tu anuncio base",
    business: "Negocio",
    businessPh: "Ej: Salón de belleza Tegucigalpa",
    headline: "Título del anuncio",
    headlinePh: "Ej: ¿Lista para renovarte este fin de semana?",
    body: "Cuerpo del anuncio",
    bodyPh: "Ej: Tintes, cortes y uñas profesionales. 20% de descuento esta semana.",
    cta: "Llamado a la acción",
    ctaPh: "Ej: Escríbeme por WhatsApp",
    style: "Estilo",
    styles: [
      { id: "oscuro", label: "Oscuro", bg: "#26215C", text: "#FAEEDA", accent: "#A32D2D" },
      { id: "claro", label: "Claro", bg: "#FAEEDA", text: "#26215C", accent: "#A32D2D" },
      { id: "coral", label: "Coral", bg: "#A32D2D", text: "#FAEEDA", accent: "#FAEEDA" },
      { id: "blanco", label: "Blanco", bg: "#FFFFFF", text: "#26215C", accent: "#A32D2D" },
    ],
    emoji: "Emoji del negocio",
    generateBtn: "⚡ Generar todos los formatos",
    regenerate: "🔄 Regenerar",
    generating: "Generando formatos...",
    formatsTitle: "Tus formatos listos",
    formatsSub: "Descarga cada uno para la plataforma correcta",
    downloadBtn: "⬇️ Descargar",
    downloadAll: "⬇️ Descargar todos",
    copyText: "Copiar texto",
    copied: "✓ Copiado",
    formats: [
      { id: "feed", label: "Feed Facebook / Instagram", size: "1080 × 1080", platform: "Meta Feed", icon: "📘", ratio: 1, w: 300, h: 300 },
      { id: "story", label: "Stories / TikTok", size: "1080 × 1920", platform: "Stories & TikTok", icon: "📱", ratio: 9/16, w: 169, h: 300 },
      { id: "banner", label: "Banner Google / Web", size: "1200 × 628", platform: "Google & Web", icon: "🖥️", ratio: 1.91, w: 300, h: 157 },
      { id: "cuadrado", label: "Thumbnail YouTube", size: "1280 × 720", platform: "YouTube", icon: "📺", ratio: 16/9, w: 300, h: 169 },
      { id: "whatsapp", label: "WhatsApp / Telegram", size: "800 × 800", platform: "WhatsApp", icon: "💬", ratio: 1, w: 300, h: 300 },
    ],
    noPreview: "Completa el formulario y genera tus formatos",
    platformTip: "Optimizado para",
    textCopied: "Texto del anuncio copiado",
  },
  en: {
    title: "Multi-format",
    sub: "One ad, all sizes — ready for every platform automatically",
    inputTitle: "Your base ad",
    business: "Business",
    businessPh: "E.g.: Beauty Salon Tegucigalpa",
    headline: "Ad headline",
    headlinePh: "E.g.: Ready for a fresh new look this weekend?",
    body: "Ad body",
    bodyPh: "E.g.: Professional hair, cuts and nails. 20% discount this week.",
    cta: "Call to action",
    ctaPh: "E.g.: Message me on WhatsApp",
    style: "Style",
    styles: [
      { id: "oscuro", label: "Dark", bg: "#26215C", text: "#FAEEDA", accent: "#A32D2D" },
      { id: "claro", label: "Light", bg: "#FAEEDA", text: "#26215C", accent: "#A32D2D" },
      { id: "coral", label: "Coral", bg: "#A32D2D", text: "#FAEEDA", accent: "#FAEEDA" },
      { id: "blanco", label: "White", bg: "#FFFFFF", text: "#26215C", accent: "#A32D2D" },
    ],
    emoji: "Business emoji",
    generateBtn: "⚡ Generate all formats",
    regenerate: "🔄 Regenerate",
    generating: "Generating formats...",
    formatsTitle: "Your formats are ready",
    formatsSub: "Download each one for the right platform",
    downloadBtn: "⬇️ Download",
    downloadAll: "⬇️ Download all",
    copyText: "Copy text",
    copied: "✓ Copied",
    formats: [
      { id: "feed", label: "Facebook / Instagram Feed", size: "1080 × 1080", platform: "Meta Feed", icon: "📘", ratio: 1, w: 300, h: 300 },
      { id: "story", label: "Stories / TikTok", size: "1080 × 1920", platform: "Stories & TikTok", icon: "📱", ratio: 9/16, w: 169, h: 300 },
      { id: "banner", label: "Google Banner / Web", size: "1200 × 628", platform: "Google & Web", icon: "🖥️", ratio: 1.91, w: 300, h: 157 },
      { id: "cuadrado", label: "YouTube Thumbnail", size: "1280 × 720", platform: "YouTube", icon: "📺", ratio: 16/9, w: 300, h: 169 },
      { id: "whatsapp", label: "WhatsApp / Telegram", size: "800 × 800", platform: "WhatsApp", icon: "💬", ratio: 1, w: 300, h: 300 },
    ],
    noPreview: "Complete the form and generate your formats",
    platformTip: "Optimized for",
    textCopied: "Ad text copied",
  }
};

const EMOJIS = ["✂️","☕","🍕","🛍️","💅","🏋️","🏥","🎓","🏠","🚗","🌿","💄","👗","🎂","🍔"];

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

function AdCanvas({ form, style, format, canvasId }) {
  const canvasRef = useRef(null);
  const W = format.w * 2;
  const H = format.h * 2;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    canvas.width = W; canvas.height = H;

    // Background
    ctx.fillStyle = style.bg;
    ctx.fillRect(0, 0, W, H);

    // Decorative elements (circles)
    ctx.globalAlpha = 0.1;
    ctx.fillStyle = style.accent;
    ctx.beginPath(); ctx.arc(W - W*0.15, H*0.15, W*0.28, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(W*0.1, H*0.85, W*0.18, 0, Math.PI * 2); ctx.fill();
    ctx.globalAlpha = 1;

    // Top accent bar
    ctx.fillStyle = style.accent;
    ctx.fillRect(0, 0, W, 6);

    // Emoji
    const emojiSize = Math.min(W, H) * 0.18;
    ctx.font = `${emojiSize}px serif`;
    ctx.textAlign = "center";
    ctx.fillText(form.emoji || "⚡", W / 2, H * 0.22);

    // Business name
    ctx.fillStyle = style.accent;
    ctx.font = `bold ${Math.min(W, H) * 0.04}px Arial`;
    ctx.fillText((form.business || "Tu negocio").toUpperCase().substring(0, 28), W / 2, H * 0.32);

    // Separator
    ctx.strokeStyle = style.text;
    ctx.globalAlpha = 0.2;
    ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(W * 0.15, H * 0.36); ctx.lineTo(W * 0.85, H * 0.36); ctx.stroke();
    ctx.globalAlpha = 1;

    // Headline
    ctx.fillStyle = style.text;
    const fontSize = Math.min(W, H) * 0.06;
    ctx.font = `bold ${fontSize}px Arial`;
    const headline = form.headline || "Tu título aquí";
    const words = headline.split(" ");
    let line = "", lines = [];
    for (let w of words) {
      const test = line + w + " ";
      if (ctx.measureText(test).width > W * 0.8 && line) { lines.push(line.trim()); line = w + " "; }
      else line = test;
    }
    lines.push(line.trim());
    const lineH = fontSize * 1.3;
    const startY = H * 0.46 - (lines.length - 1) * lineH / 2;
    lines.slice(0, 3).forEach((l, i) => ctx.fillText(l, W / 2, startY + i * lineH));

    // Body (smaller, shorter)
    const bodySize = Math.min(W, H) * 0.038;
    ctx.font = `${bodySize}px Arial`;
    ctx.fillStyle = style.text;
    ctx.globalAlpha = 0.75;
    const bodyText = (form.body || "").substring(0, 60);
    ctx.fillText(bodyText, W / 2, H * 0.65);
    ctx.globalAlpha = 1;

    // CTA Button
    const btnW = W * 0.55, btnH = H * 0.08, btnY = H * 0.72;
    ctx.fillStyle = style.accent;
    roundRect(ctx, (W - btnW) / 2, btnY, btnW, btnH, btnH / 2);
    ctx.fill();
    ctx.fillStyle = style.bg;
    ctx.font = `bold ${Math.min(W, H) * 0.04}px Arial`;
    ctx.globalAlpha = 1;
    ctx.fillText(form.cta || "Contáctanos →", W / 2, btnY + btnH * 0.65);

    // Platform badge
    ctx.fillStyle = style.text;
    ctx.globalAlpha = 0.3;
    ctx.font = `${Math.min(W, H) * 0.03}px Arial`;
    ctx.fillText("Voxa ⚡", W / 2, H * 0.96);
    ctx.globalAlpha = 1;

  }, [form, style, W, H]);

  const download = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = `voxa-${format.id}-${form.business || "anuncio"}.png`;
    link.href = canvas.toDataURL("image/png", 1);
    link.click();
  };

  return { canvasRef, download };
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y); ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

function FormatCard({ format, form, style, t, lang }) {
  const canvasRef = useRef(null);
  const [copied, setCopied] = useState(false);
  const W = format.w * 2, H = format.h * 2;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    canvas.width = W; canvas.height = H;
    ctx.fillStyle = style.bg;
    ctx.fillRect(0, 0, W, H);
    ctx.globalAlpha = 0.1;
    ctx.fillStyle = style.accent;
    ctx.beginPath(); ctx.arc(W - W*0.15, H*0.15, W*0.28, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(W*0.1, H*0.85, W*0.18, 0, Math.PI * 2); ctx.fill();
    ctx.globalAlpha = 1;
    ctx.fillStyle = style.accent;
    ctx.fillRect(0, 0, W, 6);
    const emojiSize = Math.min(W, H) * 0.18;
    ctx.font = `${emojiSize}px serif`;
    ctx.textAlign = "center";
    ctx.fillText(form.emoji || "⚡", W / 2, H * 0.22);
    ctx.fillStyle = style.accent;
    ctx.font = `bold ${Math.min(W, H) * 0.04}px Arial`;
    ctx.fillText((form.business || "Tu negocio").toUpperCase().substring(0, 28), W / 2, H * 0.32);
    ctx.strokeStyle = style.text;
    ctx.globalAlpha = 0.2;
    ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(W * 0.15, H * 0.36); ctx.lineTo(W * 0.85, H * 0.36); ctx.stroke();
    ctx.globalAlpha = 1;
    ctx.fillStyle = style.text;
    const fontSize = Math.min(W, H) * 0.06;
    ctx.font = `bold ${fontSize}px Arial`;
    const headline = form.headline || "Tu título aquí";
    const words = headline.split(" ");
    let line = "", lines = [];
    for (let w of words) {
      const test = line + w + " ";
      if (ctx.measureText(test).width > W * 0.8 && line) { lines.push(line.trim()); line = w + " "; }
      else line = test;
    }
    lines.push(line.trim());
    const lineH = fontSize * 1.3;
    const startY = H * 0.46 - (lines.length - 1) * lineH / 2;
    lines.slice(0, 3).forEach((l, i) => ctx.fillText(l, W / 2, startY + i * lineH));
    const bodySize = Math.min(W, H) * 0.038;
    ctx.font = `${bodySize}px Arial`;
    ctx.fillStyle = style.text;
    ctx.globalAlpha = 0.75;
    ctx.fillText((form.body || "").substring(0, 60), W / 2, H * 0.65);
    ctx.globalAlpha = 1;
    const btnW = W * 0.55, btnH = H * 0.08, btnY = H * 0.72;
    ctx.fillStyle = style.accent;
    roundRect(ctx, (W - btnW) / 2, btnY, btnW, btnH, btnH / 2);
    ctx.fill();
    ctx.fillStyle = style.bg;
    ctx.font = `bold ${Math.min(W, H) * 0.04}px Arial`;
    ctx.fillText(form.cta || "Contáctanos →", W / 2, btnY + btnH * 0.65);
    ctx.fillStyle = style.text;
    ctx.globalAlpha = 0.3;
    ctx.font = `${Math.min(W, H) * 0.03}px Arial`;
    ctx.fillText("Voxa ⚡", W / 2, H * 0.96);
    ctx.globalAlpha = 1;
  }, [form, style, W, H]);

  const download = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = `voxa-${format.id}.png`;
    link.href = canvas.toDataURL("image/png", 1);
    link.click();
  };

  const copyAdText = () => {
    navigator.clipboard.writeText(`${form.headline}\n\n${form.body}\n\n${form.cta}`);
    setCopied(true); setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ background: "white", border: "1px solid #e8e8f0", borderRadius: 16, overflow: "hidden" }}>
      <div style={{ background: "#fafafa", padding: "12px 16px", borderBottom: "1px solid #f0f0f5", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 18 }}>{format.icon}</span>
          <div>
            <p style={{ fontSize: 13, fontWeight: 700, color: "#08080a", margin: 0 }}>{format.label}</p>
            <p style={{ fontSize: 11, color: "#9ca3af", margin: 0 }}>{format.size} · {t.platformTip} {format.platform}</p>
          </div>
        </div>
        <div style={{ display: "flex", gap: 6 }}>
          <button onClick={copyAdText} style={{ fontSize: 11, padding: "5px 10px", borderRadius: 7, border: "1px solid #e5e7eb", background: copied ? "#f0fdf4" : "white", color: copied ? "#16a34a" : "#6b7280", cursor: "pointer", fontWeight: 600 }}>
            {copied ? t.copied : t.copyText}
          </button>
          <button onClick={download} style={{ fontSize: 11, padding: "5px 10px", borderRadius: 7, border: "none", background: "#26215C", color: "white", cursor: "pointer", fontWeight: 700 }}>
            {t.downloadBtn}
          </button>
        </div>
      </div>
      <div style={{ padding: 16, background: "#f8f8fc", display: "flex", justifyContent: "center" }}>
        <canvas ref={canvasRef} style={{ width: format.w, height: format.h, borderRadius: 10, boxShadow: "0 2px 12px rgba(0,0,0,0.1)" }} />
      </div>
    </div>
  );
}

export default function VoxaMultiformato() {
  const [lang, setLang] = useState("es");
  const [form, setForm] = useState({ business: "", headline: "", body: "", cta: "", emoji: "✂️", style: "oscuro" });
  const [generated, setGenerated] = useState(false);
  const [generating, setGenerating] = useState(false);
  const t = T[lang];
  const selectedStyle = t.styles.find(s => s.id === form.style) || t.styles[0];
  const canGenerate = form.business.trim().length > 2 && form.headline.trim().length > 5;

  const generate = async () => {
    setGenerating(true);
    await new Promise(r => setTimeout(r, 1000));
    setGenerated(true);
    setGenerating(false);
  };

  const downloadAll = () => {
    document.querySelectorAll("[data-voxa-canvas]").forEach((canvas, i) => {
      setTimeout(() => {
        const link = document.createElement("a");
        link.download = `voxa-formato-${i + 1}.png`;
        link.href = canvas.toDataURL("image/png", 1);
        link.click();
      }, i * 400);
    });
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

      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "28px 5%" }}>
        <h2 style={{ fontSize: 22, fontWeight: 900, color: "#26215C", margin: "0 0 4px" }}>{t.title}</h2>
        <p style={{ fontSize: 14, color: "#6b7280", margin: "0 0 28px" }}>{t.sub}</p>

        <div style={{ display: "grid", gridTemplateColumns: "340px 1fr", gap: 24, alignItems: "start" }}>

          {/* FORM */}
          <div style={{ background: "white", border: "1px solid #e8e8f0", borderRadius: 16, padding: "22px", display: "flex", flexDirection: "column", gap: 16, position: "sticky", top: 20 }}>
            <p style={{ fontSize: 14, fontWeight: 800, color: "#26215C", margin: 0 }}>✏️ {t.inputTitle}</p>

            <div>
              <label style={{ fontSize: 11, fontWeight: 700, color: "#374151", display: "block", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>{t.business}</label>
              <input value={form.business} onChange={e => setForm(f => ({ ...f, business: e.target.value }))} placeholder={t.businessPh} style={inp} />
            </div>

            <div>
              <label style={{ fontSize: 11, fontWeight: 700, color: "#374151", display: "block", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>{t.headline}</label>
              <input value={form.headline} onChange={e => setForm(f => ({ ...f, headline: e.target.value }))} placeholder={t.headlinePh} style={inp} />
            </div>

            <div>
              <label style={{ fontSize: 11, fontWeight: 700, color: "#374151", display: "block", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>{t.body}</label>
              <textarea value={form.body} onChange={e => setForm(f => ({ ...f, body: e.target.value }))} placeholder={t.bodyPh} style={{ ...inp, minHeight: 70, resize: "none" }} />
            </div>

            <div>
              <label style={{ fontSize: 11, fontWeight: 700, color: "#374151", display: "block", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>{t.cta}</label>
              <input value={form.cta} onChange={e => setForm(f => ({ ...f, cta: e.target.value }))} placeholder={t.ctaPh} style={inp} />
            </div>

            <div>
              <label style={{ fontSize: 11, fontWeight: 700, color: "#374151", display: "block", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.05em" }}>{t.emoji}</label>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {EMOJIS.map(e => (
                  <button key={e} onClick={() => setForm(f => ({ ...f, emoji: e }))}
                    style={{ width: 36, height: 36, borderRadius: 8, border: form.emoji === e ? "2px solid #A32D2D" : "1.5px solid #e5e7eb", background: form.emoji === e ? "#fff5f5" : "white", fontSize: 18, cursor: "pointer" }}>
                    {e}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label style={{ fontSize: 11, fontWeight: 700, color: "#374151", display: "block", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.05em" }}>{t.style}</label>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                {t.styles.map(s => (
                  <button key={s.id} onClick={() => setForm(f => ({ ...f, style: s.id }))}
                    style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 12px", borderRadius: 9, border: form.style === s.id ? "2px solid #A32D2D" : "1.5px solid #e5e7eb", background: "white", cursor: "pointer" }}>
                    <div style={{ width: 20, height: 20, borderRadius: 5, background: s.bg, border: "1px solid #e5e7eb", flexShrink: 0 }} />
                    <span style={{ fontSize: 12, fontWeight: form.style === s.id ? 700 : 400, color: form.style === s.id ? "#A32D2D" : "#374151" }}>{s.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <button onClick={generate} disabled={!canGenerate || generating}
              style={{ padding: "13px", borderRadius: 11, border: "none", background: canGenerate && !generating ? "#26215C" : "#e5e7eb", color: canGenerate && !generating ? "white" : "#9ca3af", fontSize: 14, fontWeight: 800, cursor: canGenerate && !generating ? "pointer" : "not-allowed" }}>
              {generating ? (
                <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                  <span style={{ width: 15, height: 15, border: "2px solid rgba(255,255,255,.4)", borderTopColor: "white", borderRadius: "50%", display: "inline-block", animation: "spin .7s linear infinite" }} />
                  {t.generating}
                </span>
              ) : generated ? t.regenerate : t.generateBtn}
            </button>
          </div>

          {/* FORMATS */}
          <div>
            {!generated ? (
              <div style={{ background: "white", border: "1px solid #e8e8f0", borderRadius: 16, padding: "60px 24px", textAlign: "center" }}>
                <p style={{ fontSize: 48, margin: "0 0 16px" }}>🖼️</p>
                <p style={{ fontSize: 14, color: "#9ca3af", margin: 0 }}>{t.noPreview}</p>
              </div>
            ) : (
              <>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                  <div>
                    <p style={{ fontSize: 16, fontWeight: 800, color: "#26215C", margin: "0 0 2px" }}>{t.formatsTitle}</p>
                    <p style={{ fontSize: 13, color: "#9ca3af", margin: 0 }}>{t.formatsSub}</p>
                  </div>
                  <button onClick={downloadAll} style={{ padding: "9px 18px", borderRadius: 10, border: "none", background: "#A32D2D", color: "white", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>
                    {t.downloadAll}
                  </button>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {t.formats.map(format => (
                    <FormatCard key={format.id} format={format} form={form} style={selectedStyle} t={t} lang={lang} />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
    </div>
  );
}

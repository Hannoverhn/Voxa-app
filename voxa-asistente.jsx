import { useState, useRef, useEffect } from "react";

const T = {
  es: {
    title: "Asistente Voxa",
    sub: "Tu experto personal de publicidad digital, disponible 24/7",
    placeholder: "Escribe tu pregunta aquí... Ej: ¿Cómo le meto $5 a Facebook?",
    sendBtn: "Enviar",
    thinking: "Voxa está pensando...",
    quickTitle: "Preguntas frecuentes",
    quick: [
      "¿Cómo le meto $5 a Facebook para publicidad?",
      "¿Por qué Meta rechazó mi anuncio?",
      "¿Cuándo debo parar un anuncio que no funciona?",
      "¿Cómo sé si mi anuncio está funcionando?",
      "¿Qué es el CTR y por qué importa?",
      "¿Cuánto debo invertir para ver resultados?",
      "¿Cuál es la mejor hora para publicar un anuncio?",
      "¿Cómo conecto mi cuenta de Facebook con Voxa?",
    ],
    welcome: "¡Hola! Soy tu asistente de publicidad digital en Voxa. Puedes preguntarme cualquier cosa sobre tus campañas — desde cómo meter $5 en Facebook hasta por qué tu anuncio no está funcionando. ¿En qué te ayudo hoy?",
    you: "Tú",
    voxa: "Voxa",
    clearBtn: "Limpiar conversación",
    copyBtn: "Copiar",
    copied: "✓",
    steps: "Pasos",
    tip: "💡 Tip",
    warning: "⚠️ Importante",
    newQuestion: "¿Tienes otra pregunta?",
  },
  en: {
    title: "Voxa Assistant",
    sub: "Your personal digital advertising expert, available 24/7",
    placeholder: "Type your question here... E.g.: How do I add $5 to Facebook ads?",
    sendBtn: "Send",
    thinking: "Voxa is thinking...",
    quickTitle: "Frequently asked questions",
    quick: [
      "How do I add $5 to Facebook for advertising?",
      "Why did Meta reject my ad?",
      "When should I stop an ad that isn't working?",
      "How do I know if my ad is working?",
      "What is CTR and why does it matter?",
      "How much should I invest to see results?",
      "What's the best time to run an ad?",
      "How do I connect my Facebook account to Voxa?",
    ],
    welcome: "Hi! I'm your digital advertising assistant at Voxa. You can ask me anything about your campaigns — from how to add $5 to Facebook to why your ad isn't working. How can I help you today?",
    you: "You",
    voxa: "Voxa",
    clearBtn: "Clear conversation",
    copyBtn: "Copy",
    copied: "✓",
    steps: "Steps",
    tip: "💡 Tip",
    warning: "⚠️ Important",
    newQuestion: "Do you have another question?",
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

function TypingDots() {
  return (
    <div style={{ display: "flex", gap: 4, alignItems: "center", padding: "4px 0" }}>
      {[0,1,2].map(i => (
        <div key={i} style={{ width: 7, height: 7, borderRadius: "50%", background: "#A32D2D", animation: `bounce .9s ${i * 0.15}s infinite` }} />
      ))}
    </div>
  );
}

function MessageBubble({ msg, t }) {
  const [copied, setCopied] = useState(false);
  const isVoxa = msg.role === "assistant";

  const copy = () => {
    navigator.clipboard.writeText(msg.text || "");
    setCopied(true); setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ display: "flex", flexDirection: isVoxa ? "row" : "row-reverse", gap: 10, alignItems: "flex-start", marginBottom: 20 }}>
      {/* Avatar */}
      <div style={{ width: 34, height: 34, borderRadius: "50%", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 13, color: "white", background: isVoxa ? "#26215C" : "#A32D2D" }}>
        {isVoxa ? "V" : t.you[0]}
      </div>

      {/* Bubble */}
      <div style={{ maxWidth: "76%", display: "flex", flexDirection: "column", gap: 4, alignItems: isVoxa ? "flex-start" : "flex-end" }}>
        <p style={{ fontSize: 11, fontWeight: 600, color: "#9ca3af", margin: 0 }}>{isVoxa ? t.voxa : t.you}</p>
        <div style={{
          background: isVoxa ? "white" : "#26215C",
          color: isVoxa ? "#374151" : "white",
          borderRadius: isVoxa ? "4px 16px 16px 16px" : "16px 4px 16px 16px",
          padding: "14px 18px",
          border: isVoxa ? "1px solid #e8e8f0" : "none",
          boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
          fontSize: 14,
          lineHeight: 1.7,
          whiteSpace: "pre-wrap",
        }}>
          {msg.text}
        </div>
        {isVoxa && (
          <button onClick={copy} style={{ fontSize: 11, color: "#9ca3af", background: "none", border: "none", cursor: "pointer", padding: "2px 6px", display: "flex", alignItems: "center", gap: 4 }}>
            {copied ? t.copied : t.copyBtn} {copied ? "✓" : "📋"}
          </button>
        )}
      </div>
    </div>
  );
}

export default function VoxaAsistente() {
  const [lang, setLang] = useState("es");
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [started, setStarted] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);
  const t = T[lang];

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const buildSystemPrompt = () => `Eres el asistente experto de Voxa, una plataforma de marketing digital con IA para emprendedores latinoamericanos. Tu nombre es "Asistente Voxa".

PERSONALIDAD:
- Hablas como un amigo experto, NO como un robot corporativo
- Usas lenguaje simple y directo, sin tecnicismos innecesarios
- Cuando hay pasos a seguir, los numerás claramente (1. 2. 3.)
- Siempre ofreces consejos prácticos y accionables
- Eres empático — entiendes que muchos usuarios nunca han puesto un anuncio en su vida
- Máximo 4-5 párrafos por respuesta, que sea fácil de leer en celular
- Cuando alguien pregunta cómo hacer algo en Meta/Google/TikTok, das pasos específicos con capturas de pantalla imaginadas ("verás un botón azul que dice...")

CONTEXTO DE VOXA:
- Voxa genera campañas publicitarias con IA en 52 segundos
- Tiene Voxa Score (califica anuncios antes de publicar)
- Voxa Clone (copia y supera anuncios de competidores)
- Modo Político (campañas electorales)
- Voxa Express (para negocios locales sin experiencia)
- Multi-canal: Meta, Google, TikTok
- Sistema de recargas: el usuario deposita presupuesto y Voxa cobra 20% de comisión
- Plan Pro: $19/mes | Agencias: $59/mes | Modo Político: +$24/mes

SIEMPRE responde en ${lang === "es" ? "español" : "English"}.
NUNCA menciones otras plataformas competidoras como alternativa — si el usuario necesita algo, Voxa lo tiene.`;

  const sendMessage = async (text) => {
    if (!text.trim() || loading) return;
    const userMsg = { role: "user", text };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput("");
    setLoading(true);
    setStarted(true);

    try {
      const apiMessages = newMessages.map(m => ({
        role: m.role === "assistant" ? "assistant" : "user",
        content: m.text
      }));

      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-6",
          max_tokens: 1000,
          system: buildSystemPrompt(),
          messages: apiMessages
        })
      });
      const data = await res.json();
      const reply = data.content?.[0]?.text || (lang === "es" ? "Lo siento, hubo un error. Intenta de nuevo." : "Sorry, there was an error. Please try again.");
      setMessages(prev => [...prev, { role: "assistant", text: reply }]);
    } catch {
      setMessages(prev => [...prev, { role: "assistant", text: lang === "es" ? "Hubo un problema de conexión. Por favor intenta de nuevo." : "There was a connection issue. Please try again." }]);
    } finally { setLoading(false); }
  };

  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(input); }
  };

  const clear = () => { setMessages([]); setStarted(false); setInput(""); };

  const startWithWelcome = () => {
    setMessages([{ role: "assistant", text: t.welcome }]);
    setStarted(true);
  };

  return (
    <div style={{ fontFamily: "'Inter',system-ui,sans-serif", background: "#f5f3ef", minHeight: "100vh", display: "flex", flexDirection: "column" }}>

      {/* HEADER */}
      <div style={{ background: "#26215C", padding: "0 5%", height: 62, display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 34, height: 34, background: "#A32D2D", borderRadius: 9, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, color: "white", fontSize: 15 }}>V</div>
          <div>
            <p style={{ fontWeight: 900, fontSize: 15, color: "white", margin: 0, letterSpacing: "-0.02em" }}>{t.title}</p>
            <p style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", margin: 0 }}>{t.sub}</p>
          </div>
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e", marginLeft: 4 }} />
        </div>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          {started && <button onClick={clear} style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", background: "none", border: "none", cursor: "pointer" }}>{t.clearBtn}</button>}
          <LangToggle lang={lang} setLang={setLang} />
        </div>
      </div>

      {/* CHAT AREA */}
      <div style={{ flex: 1, overflow: "auto", padding: "20px 5%", maxWidth: 720, width: "100%", margin: "0 auto", boxSizing: "border-box" }}>

        {!started ? (
          /* LANDING */
          <div>
            <div style={{ background: "linear-gradient(135deg,#26215C,#A32D2D)", borderRadius: 20, padding: "28px 28px", marginBottom: 24, textAlign: "center" }}>
              <div style={{ fontSize: 52, marginBottom: 12 }}>🤖</div>
              <h2 style={{ fontSize: 22, fontWeight: 900, color: "white", margin: "0 0 8px" }}>{t.title}</h2>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", margin: "0 0 20px", lineHeight: 1.6 }}>{t.sub}</p>
              <button onClick={startWithWelcome} style={{ background: "white", color: "#26215C", border: "none", borderRadius: 10, padding: "11px 24px", fontSize: 14, fontWeight: 800, cursor: "pointer" }}>
                {lang === "es" ? "Empezar conversación →" : "Start conversation →"}
              </button>
            </div>

            <p style={{ fontSize: 12, fontWeight: 700, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.07em", margin: "0 0 12px" }}>{t.quickTitle}</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {t.quick.map((q, i) => (
                <button key={i} onClick={() => { startWithWelcome(); setTimeout(() => sendMessage(q), 100); }}
                  style={{ display: "flex", alignItems: "center", gap: 12, padding: "13px 16px", borderRadius: 12, border: "1px solid #e8e8f0", background: "white", cursor: "pointer", textAlign: "left", transition: "border-color .15s" }}
                  onMouseOver={e => e.currentTarget.style.borderColor = "#A32D2D"}
                  onMouseOut={e => e.currentTarget.style.borderColor = "#e8e8f0"}>
                  <span style={{ fontSize: 18, flexShrink: 0 }}>
                    {["💳","🚫","⏹️","📊","📈","💰","🕐","🔗"][i]}
                  </span>
                  <span style={{ fontSize: 14, color: "#374151" }}>{q}</span>
                  <span style={{ marginLeft: "auto", color: "#d1d5db", fontSize: 16 }}>›</span>
                </button>
              ))}
            </div>
          </div>
        ) : (
          /* MESSAGES */
          <div>
            {messages.map((msg, i) => (
              <MessageBubble key={i} msg={msg} t={t} />
            ))}
            {loading && (
              <div style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 20 }}>
                <div style={{ width: 34, height: 34, borderRadius: "50%", background: "#26215C", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 13, color: "white", flexShrink: 0 }}>V</div>
                <div style={{ background: "white", border: "1px solid #e8e8f0", borderRadius: "4px 16px 16px 16px", padding: "14px 18px" }}>
                  <TypingDots />
                </div>
              </div>
            )}
            <div ref={bottomRef} />

            {!loading && messages.length > 0 && (
              <div style={{ marginBottom: 16 }}>
                <p style={{ fontSize: 12, color: "#9ca3af", margin: "0 0 8px" }}>{t.newQuestion}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {t.quick.slice(0, 4).map((q, i) => (
                    <button key={i} onClick={() => sendMessage(q)}
                      style={{ fontSize: 12, padding: "6px 12px", borderRadius: 20, border: "1px solid #e8e8f0", background: "white", color: "#374151", cursor: "pointer", transition: "all .15s" }}
                      onMouseOver={e => { e.currentTarget.style.borderColor = "#A32D2D"; e.currentTarget.style.color = "#A32D2D"; }}
                      onMouseOut={e => { e.currentTarget.style.borderColor = "#e8e8f0"; e.currentTarget.style.color = "#374151"; }}>
                      {q.length > 40 ? q.substring(0, 38) + "..." : q}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* INPUT */}
      <div style={{ background: "white", borderTop: "1px solid #e8e8f0", padding: "16px 5%", flexShrink: 0 }}>
        <div style={{ maxWidth: 720, margin: "0 auto", display: "flex", gap: 10, alignItems: "flex-end" }}>
          <textarea
            ref={inputRef}
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKey}
            placeholder={t.placeholder}
            rows={1}
            style={{ flex: 1, padding: "12px 16px", fontSize: 14, borderRadius: 12, border: "1.5px solid #e5e7eb", fontFamily: "inherit", color: "#111", outline: "none", resize: "none", lineHeight: 1.5, maxHeight: 120, overflowY: "auto" }}
            onFocus={e => e.target.style.borderColor = "#26215C"}
            onBlur={e => e.target.style.borderColor = "#e5e7eb"}
            onInput={e => { e.target.style.height = "auto"; e.target.style.height = Math.min(e.target.scrollHeight, 120) + "px"; }}
          />
          <button onClick={() => sendMessage(input)} disabled={!input.trim() || loading}
            style={{ width: 44, height: 44, borderRadius: 12, border: "none", background: input.trim() && !loading ? "#A32D2D" : "#e5e7eb", color: "white", fontSize: 18, cursor: input.trim() && !loading ? "pointer" : "not-allowed", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "background .15s" }}>
            {loading ? (
              <span style={{ width: 16, height: 16, border: "2px solid rgba(255,255,255,.4)", borderTopColor: "white", borderRadius: "50%", display: "inline-block", animation: "spin .7s linear infinite" }} />
            ) : "↑"}
          </button>
        </div>
        <p style={{ fontSize: 11, color: "#d1d5db", textAlign: "center", margin: "8px 0 0" }}>
          {lang === "es" ? "Enter para enviar · Shift+Enter para nueva línea" : "Enter to send · Shift+Enter for new line"}
        </p>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes bounce { 0%, 80%, 100% { transform: translateY(0); } 40% { transform: translateY(-6px); } }
      `}</style>
    </div>
  );
}

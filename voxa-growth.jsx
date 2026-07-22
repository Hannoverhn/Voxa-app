import { useState } from "react";

const T = {
  es: {
    title: "Voxa Growth",
    sub: "Crece con Voxa — referidos, comunidad y reconocimiento",
    badge: "🚀 Motor de crecimiento orgánico",
    tabs: ["Referidos", "Comunidad", "Ranking", "Casos de éxito"],
    refTitle: "Programa de referidos",
    refSub: "Gana $5 por cada persona que invite y se quede pagando",
    refLink: "Tu link de referido",
    refCopy: "Copiar link",
    refCopied: "✓ Copiado",
    refStats: ["Invitados", "Registrados", "Pagando", "Ganado total"],
    refHistory: "Historial de referidos",
    refName: "Nombre",
    refStatus: "Estado",
    refEarning: "Ganancia",
    communityTitle: "Comunidad Voxa",
    communitySub: "Conecta con miles de emprendedores en LATAM",
    postBtn: "📝 Publicar en comunidad",
    postPh: "Comparte un logro, pregunta o consejo...",
    rankTitle: "Ranking de negocios destacados",
    rankSub: "Los negocios que más han crecido con Voxa este mes",
    successTitle: "Casos de éxito",
    successSub: "Emprendedores reales que transformaron su negocio con Voxa",
    shareStory: "Compartir mi historia",
    badgeEarned: "Insignia obtenida",
    badges: [
      { id: "first", emoji: "🌱", name: "Primera campaña", earned: true },
      { id: "ten", emoji: "⚡", name: "10 campañas", earned: true },
      { id: "score90", emoji: "🎯", name: "Score 90+", earned: false },
      { id: "referral", emoji: "👥", name: "3 referidos", earned: false },
      { id: "political", emoji: "🏛️", name: "Modo Político", earned: false },
      { id: "agency", emoji: "🏢", name: "Primera agencia", earned: false },
    ],
    myBadges: "Mis insignias",
  },
  en: {
    title: "Voxa Growth",
    sub: "Grow with Voxa — referrals, community and recognition",
    badge: "🚀 Organic growth engine",
    tabs: ["Referrals", "Community", "Ranking", "Success stories"],
    refTitle: "Referral program",
    refSub: "Earn $5 for every person you invite who stays paying",
    refLink: "Your referral link",
    refCopy: "Copy link",
    refCopied: "✓ Copied",
    refStats: ["Invited", "Registered", "Paying", "Total earned"],
    refHistory: "Referral history",
    refName: "Name",
    refStatus: "Status",
    refEarning: "Earning",
    communityTitle: "Voxa Community",
    communitySub: "Connect with thousands of entrepreneurs in LATAM",
    postBtn: "📝 Post to community",
    postPh: "Share an achievement, question or tip...",
    rankTitle: "Featured business ranking",
    rankSub: "The businesses that have grown the most with Voxa this month",
    successTitle: "Success stories",
    successSub: "Real entrepreneurs who transformed their business with Voxa",
    shareStory: "Share my story",
    badgeEarned: "Badge earned",
    badges: [
      { id: "first", emoji: "🌱", name: "First campaign", earned: true },
      { id: "ten", emoji: "⚡", name: "10 campaigns", earned: true },
      { id: "score90", emoji: "🎯", name: "Score 90+", earned: false },
      { id: "referral", emoji: "👥", name: "3 referrals", earned: false },
      { id: "political", emoji: "🏛️", name: "Political Mode", earned: false },
      { id: "agency", emoji: "🏢", name: "First agency", earned: false },
    ],
    myBadges: "My badges",
  }
};

const REFERRALS = [
  { name: "María López", status: "paying", date: "Dic 2025", earning: 5 },
  { name: "Carlos Mejía", status: "registered", date: "Ene 2026", earning: 0 },
  { name: "Ana Torres", status: "paying", date: "Ene 2026", earning: 5 },
];

const COMMUNITY_POSTS = [
  { user: "Salón Bella", location: "Tegucigalpa, HN", emoji: "💅", content: { es: "¡Mi primera campaña con Voxa llegó a 2,400 personas! Nunca había tenido tanto alcance con solo $15. El Voxa Score fue 91. 🔥", en: "My first Voxa campaign reached 2,400 people! I've never had so much reach with just $15. Voxa Score was 91. 🔥" }, likes: 34, comments: 8, time: "hace 2h" },
  { user: "Café Central", location: "Medellín, CO", emoji: "☕", content: { es: "Pregunta: ¿Cuándo es mejor publicar anuncios de delivery? ¿Mediodía o noche?", en: "Question: When is best to post delivery ads? Noon or night?" }, likes: 12, comments: 21, time: "hace 4h" },
  { user: "Dr. Ramírez", location: "Ciudad de México, MX", emoji: "👨‍⚕️", content: { es: "Tip: El Modo Político de Voxa es increíble para campañas municipales. Ayudé a 3 candidatos locales y los 3 ganaron. 🏛️", en: "Tip: Voxa's Political Mode is incredible for municipal campaigns. I helped 3 local candidates and all 3 won. 🏛️" }, likes: 89, comments: 15, time: "hace 1d" },
];

const RANKING = [
  { pos: 1, name: "Boutique Style", type: { es: "Retail", en: "Retail" }, city: "Bogotá, CO", growth: "+340%", campaigns: 28, emoji: "🥇" },
  { pos: 2, name: "Salón Bella", type: { es: "Belleza", en: "Beauty" }, city: "Tegucigalpa, HN", growth: "+280%", campaigns: 22, emoji: "🥈" },
  { pos: 3, name: "Café La Plaza", type: { es: "Restaurante", en: "Restaurant" }, city: "Guatemala, GT", growth: "+210%", campaigns: 19, emoji: "🥉" },
  { pos: 4, name: "Dr. Martínez", type: { es: "Salud", en: "Health" }, city: "Lima, PE", growth: "+190%", campaigns: 16, emoji: "4️⃣" },
  { pos: 5, name: "FitLife Gym", type: { es: "Fitness", en: "Fitness" }, city: "Santo Domingo, DO", growth: "+175%", campaigns: 14, emoji: "5️⃣" },
];

const SUCCESS_STORIES = [
  { name: "Carmen Rodríguez", business: "Salón Carmen", city: "Tegucigalpa, HN", emoji: "💅", result: { es: "Pasé de 5 a 23 citas por semana en solo 6 semanas con Voxa.", en: "I went from 5 to 23 appointments per week in just 6 weeks with Voxa." }, revenue: { es: "+$800/mes", en: "+$800/mo" }, color: "#be185d" },
  { name: "Roberto Lima", business: "Tacos El Rey", city: "Ciudad de México, MX", emoji: "🌮", result: { es: "Mi delivery creció 3x gracias a los anuncios de Voxa. Ahora tengo 2 repartidores.", en: "My delivery grew 3x thanks to Voxa ads. Now I have 2 delivery drivers." }, revenue: { es: "+$1,200/mes", en: "+$1,200/mo" }, color: "#b45309" },
  { name: "Licda. Patricia Méndez", business: "Consultoría Legal", city: "Bogotá, CO", emoji: "⚖️", result: { es: "Conseguí 8 nuevos clientes corporativos con solo 3 meses de usar Voxa.", en: "I got 8 new corporate clients with just 3 months of using Voxa." }, revenue: { es: "+$3,500/mes", en: "+$3,500/mo" }, color: "#1e40af" },
];

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

export default function VoxaGrowth() {
  const [lang, setLang] = useState("es");
  const [tab, setTab] = useState(0);
  const [copied, setCopied] = useState(false);
  const [post, setPost] = useState("");
  const [posts, setPosts] = useState(COMMUNITY_POSTS);
  const t = T[lang];
  const refLink = "https://voxa.ai?ref=mi-negocio-123";
  const totalEarned = REFERRALS.filter(r => r.status === "paying").reduce((a, r) => a + r.earning, 0);

  const statusColors = { paying: { bg: "#f0fdf4", color: "#16a34a", border: "#bbf7d0", label: { es: "Pagando", en: "Paying" } }, registered: { bg: "#fefce8", color: "#854d0e", border: "#fde68a", label: { es: "Registrado", en: "Registered" } } };

  return (
    <div style={{ fontFamily: "'Inter',system-ui,sans-serif", background: "#f5f3ef", minHeight: "100vh" }}>
      <div style={{ background: "linear-gradient(135deg,#26215C,#A32D2D)", padding: "0 5%", height: 62, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
          <div style={{ width: 30, height: 30, background: "rgba(255,255,255,0.2)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, color: "white", fontSize: 14 }}>V</div>
          <span style={{ fontWeight: 900, fontSize: 17, color: "white" }}>{t.title}</span>
          <span style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", marginLeft: 4 }}>{t.badge}</span>
        </div>
        <LangToggle lang={lang} setLang={setLang} />
      </div>

      <div style={{ background: "white", borderBottom: "1px solid #e8e8f0", padding: "0 5%", display: "flex", overflowX: "auto" }}>
        {t.tabs.map((tb, i) => (
          <button key={i} onClick={() => setTab(i)}
            style={{ padding: "13px 18px", border: "none", borderBottom: tab === i ? "2px solid #A32D2D" : "2px solid transparent", background: "transparent", fontSize: 13, fontWeight: tab === i ? 700 : 500, color: tab === i ? "#A32D2D" : "#6b7280", cursor: "pointer", whiteSpace: "nowrap" }}>
            {["🔗","💬","🏆","⭐"][i]} {tb}
          </button>
        ))}
      </div>

      <div style={{ maxWidth: 860, margin: "0 auto", padding: "24px 5%" }}>

        {/* REFERIDOS */}
        {tab === 0 && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 900, color: "#26215C", margin: "0 0 6px" }}>{t.refTitle}</h2>
            <p style={{ fontSize: 13, color: "#9ca3af", margin: "0 0 20px" }}>{t.refSub}</p>

            <div style={{ background: "linear-gradient(135deg,#26215C,#A32D2D)", borderRadius: 16, padding: "22px 24px", marginBottom: 20 }}>
              <p style={{ fontSize: 12, fontWeight: 700, color: "rgba(255,255,255,0.6)", textTransform: "uppercase", letterSpacing: "0.06em", margin: "0 0 8px" }}>{t.refLink}</p>
              <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <p style={{ fontSize: 13, fontWeight: 700, color: "white", margin: 0, flex: 1, wordBreak: "break-all" }}>{refLink}</p>
                <button onClick={() => { navigator.clipboard.writeText(refLink); setCopied(true); setTimeout(() => setCopied(false), 2000); }}
                  style={{ padding: "8px 16px", borderRadius: 9, border: "none", background: copied ? "#16a34a" : "white", color: copied ? "white" : "#26215C", fontSize: 12, fontWeight: 700, cursor: "pointer", flexShrink: 0 }}>
                  {copied ? t.refCopied : t.refCopy}
                </button>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12, marginBottom: 24 }}>
              {[[REFERRALS.length, t.refStats[0]], [REFERRALS.filter(r => r.status !== "").length, t.refStats[1]], [REFERRALS.filter(r => r.status === "paying").length, t.refStats[2]], [`$${totalEarned}`, t.refStats[3]]].map(([v, l], i) => (
                <div key={i} style={{ background: "white", border: "1px solid #e8e8f0", borderRadius: 12, padding: "16px", textAlign: "center" }}>
                  <p style={{ fontSize: 28, fontWeight: 900, color: i === 3 ? "#16a34a" : "#26215C", margin: "0 0 4px", letterSpacing: "-0.03em" }}>{v}</p>
                  <p style={{ fontSize: 11, color: "#9ca3af", margin: 0 }}>{l}</p>
                </div>
              ))}
            </div>

            <div style={{ background: "white", border: "1px solid #e8e8f0", borderRadius: 14, overflow: "hidden", marginBottom: 20 }}>
              <div style={{ padding: "12px 18px", borderBottom: "1px solid #f3f4f6", background: "#fafafa" }}>
                <p style={{ fontSize: 12, fontWeight: 700, color: "#374151", margin: 0, textTransform: "uppercase", letterSpacing: "0.05em" }}>{t.refHistory}</p>
              </div>
              {REFERRALS.map((r, i) => {
                const sc = statusColors[r.status];
                return (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 14, padding: "13px 18px", borderBottom: i < REFERRALS.length - 1 ? "1px solid #f3f4f6" : "none" }}>
                    <div style={{ width: 36, height: 36, background: "#26215C", borderRadius: 9, display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 900, fontSize: 14, flexShrink: 0 }}>{r.name[0]}</div>
                    <div style={{ flex: 1 }}>
                      <p style={{ fontSize: 13, fontWeight: 700, color: "#26215C", margin: "0 0 1px" }}>{r.name}</p>
                      <p style={{ fontSize: 11, color: "#9ca3af", margin: 0 }}>{r.date}</p>
                    </div>
                    <span style={{ fontSize: 11, fontWeight: 600, color: sc.color, background: sc.bg, border: `1px solid ${sc.border}`, padding: "3px 10px", borderRadius: 20 }}>{sc.label[lang]}</span>
                    <span style={{ fontSize: 14, fontWeight: 900, color: r.status === "paying" ? "#16a34a" : "#9ca3af" }}>{r.status === "paying" ? `+$${r.earning}` : "—"}</span>
                  </div>
                );
              })}
            </div>

            <div style={{ background: "white", border: "1px solid #e8e8f0", borderRadius: 14, padding: "18px 20px" }}>
              <p style={{ fontSize: 13, fontWeight: 700, color: "#26215C", margin: "0 0 12px" }}>{t.myBadges}</p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10 }}>
                {t.badges.map((b, i) => (
                  <div key={i} style={{ background: b.earned ? "#FFF8F5" : "#fafafa", border: `1.5px solid ${b.earned ? "#F5C6C6" : "#e5e7eb"}`, borderRadius: 12, padding: "14px", textAlign: "center", opacity: b.earned ? 1 : 0.5 }}>
                    <span style={{ fontSize: 28, display: "block", marginBottom: 6 }}>{b.emoji}</span>
                    <p style={{ fontSize: 11, fontWeight: 700, color: b.earned ? "#A32D2D" : "#9ca3af", margin: 0 }}>{b.name}</p>
                    {b.earned && <p style={{ fontSize: 10, color: "#16a34a", margin: "4px 0 0", fontWeight: 600 }}>✓ {t.badgeEarned}</p>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* COMUNIDAD */}
        {tab === 1 && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 900, color: "#26215C", margin: "0 0 6px" }}>{t.communityTitle}</h2>
            <p style={{ fontSize: 13, color: "#9ca3af", margin: "0 0 20px" }}>{t.communitySub}</p>
            <div style={{ background: "white", border: "1px solid #e8e8f0", borderRadius: 14, padding: "16px", marginBottom: 20 }}>
              <textarea value={post} onChange={e => setPost(e.target.value)} placeholder={t.postPh}
                style={{ width: "100%", padding: "12px", fontSize: 14, borderRadius: 10, border: "1.5px solid #e5e7eb", fontFamily: "inherit", resize: "none", minHeight: 80, boxSizing: "border-box", outline: "none" }} />
              <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 10 }}>
                <button onClick={() => { if (post.trim()) { setPosts(prev => [{ user: lang === "es" ? "Mi negocio" : "My business", location: "Honduras", emoji: "🏪", content: { es: post, en: post }, likes: 0, comments: 0, time: lang === "es" ? "ahora" : "now" }, ...prev]); setPost(""); } }}
                  disabled={!post.trim()}
                  style={{ padding: "9px 20px", borderRadius: 10, border: "none", background: post.trim() ? "#A32D2D" : "#e5e7eb", color: "white", fontSize: 13, fontWeight: 700, cursor: post.trim() ? "pointer" : "not-allowed" }}>
                  {t.postBtn}
                </button>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {posts.map((p, i) => (
                <div key={i} style={{ background: "white", border: "1px solid #e8e8f0", borderRadius: 16, padding: "18px 20px" }}>
                  <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 12 }}>
                    <div style={{ width: 40, height: 40, background: "#26215C", borderRadius: 11, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>{p.emoji}</div>
                    <div>
                      <p style={{ fontSize: 14, fontWeight: 700, color: "#26215C", margin: "0 0 1px" }}>{p.user}</p>
                      <p style={{ fontSize: 12, color: "#9ca3af", margin: 0 }}>{p.location} · {p.time}</p>
                    </div>
                  </div>
                  <p style={{ fontSize: 14, color: "#374151", margin: "0 0 14px", lineHeight: 1.7 }}>{p.content[lang]}</p>
                  <div style={{ display: "flex", gap: 16 }}>
                    <button style={{ fontSize: 12, color: "#9ca3af", background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 5 }}>❤️ {p.likes}</button>
                    <button style={{ fontSize: 12, color: "#9ca3af", background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 5 }}>💬 {p.comments}</button>
                    <button style={{ fontSize: 12, color: "#9ca3af", background: "none", border: "none", cursor: "pointer" }}>📤 {lang === "es" ? "Compartir" : "Share"}</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* RANKING */}
        {tab === 2 && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 900, color: "#26215C", margin: "0 0 6px" }}>{t.rankTitle}</h2>
            <p style={{ fontSize: 13, color: "#9ca3af", margin: "0 0 20px" }}>{t.rankSub}</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {RANKING.map((r, i) => (
                <div key={i} style={{ background: i < 3 ? "linear-gradient(135deg,#26215C,#1a1730)" : "white", border: i < 3 ? "none" : "1px solid #e8e8f0", borderRadius: 14, padding: "16px 20px", display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
                  <span style={{ fontSize: 24, flexShrink: 0 }}>{r.emoji}</span>
                  <div style={{ flex: 1, minWidth: 100 }}>
                    <p style={{ fontSize: 15, fontWeight: 800, color: i < 3 ? "white" : "#26215C", margin: "0 0 2px" }}>{r.name}</p>
                    <p style={{ fontSize: 12, color: i < 3 ? "rgba(255,255,255,0.5)" : "#9ca3af", margin: 0 }}>{r.type[lang]} · {r.city}</p>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <p style={{ fontSize: 22, fontWeight: 900, color: i < 3 ? "#FAEEDA" : "#16a34a", margin: "0 0 2px", letterSpacing: "-0.02em" }}>{r.growth}</p>
                    <p style={{ fontSize: 11, color: i < 3 ? "rgba(255,255,255,0.4)" : "#9ca3af", margin: 0 }}>{r.campaigns} {lang === "es" ? "campañas" : "campaigns"}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CASOS DE ÉXITO */}
        {tab === 3 && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 900, color: "#26215C", margin: "0 0 6px" }}>{t.successTitle}</h2>
            <p style={{ fontSize: 13, color: "#9ca3af", margin: "0 0 20px" }}>{t.successSub}</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {SUCCESS_STORIES.map((s, i) => (
                <div key={i} style={{ background: "white", border: "1px solid #e8e8f0", borderRadius: 18, overflow: "hidden" }}>
                  <div style={{ background: s.color, padding: "20px 24px", display: "flex", gap: 14, alignItems: "center" }}>
                    <span style={{ fontSize: 36 }}>{s.emoji}</span>
                    <div>
                      <p style={{ fontSize: 16, fontWeight: 900, color: "white", margin: "0 0 3px" }}>{s.name}</p>
                      <p style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", margin: 0 }}>{s.business} · {s.city}</p>
                    </div>
                    <div style={{ marginLeft: "auto", background: "rgba(255,255,255,0.15)", borderRadius: 12, padding: "10px 16px", textAlign: "center" }}>
                      <p style={{ fontSize: 22, fontWeight: 900, color: "white", margin: "0 0 2px" }}>{s.revenue[lang]}</p>
                      <p style={{ fontSize: 11, color: "rgba(255,255,255,0.6)", margin: 0 }}>{lang === "es" ? "ingresos extra" : "extra revenue"}</p>
                    </div>
                  </div>
                  <div style={{ padding: "18px 24px" }}>
                    <p style={{ fontSize: 15, color: "#374151", margin: "0 0 16px", lineHeight: 1.7, fontStyle: "italic" }}>"{s.result[lang]}"</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 20, background: "#FFF8F5", border: "1px solid #F5C6C6", borderRadius: 14, padding: "20px 24px", textAlign: "center" }}>
              <p style={{ fontSize: 15, fontWeight: 800, color: "#26215C", margin: "0 0 6px" }}>{lang === "es" ? "¿Tienes una historia de éxito con Voxa?" : "Do you have a success story with Voxa?"}</p>
              <p style={{ fontSize: 13, color: "#6b7280", margin: "0 0 16px" }}>{lang === "es" ? "Compártela y llega a miles de emprendedores." : "Share it and reach thousands of entrepreneurs."}</p>
              <button style={{ padding: "10px 24px", borderRadius: 10, border: "none", background: "#A32D2D", color: "white", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>{t.shareStory}</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

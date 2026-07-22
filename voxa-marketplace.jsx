import { useState } from "react";
const SERVICES = {
  es: [
    { id: 1, icon: "🎨", cat: "Diseño", name: "Logo profesional", price: 49, delivery: "3 días", rating: 4.9, reviews: 128, seller: "Estudio Creativo HN", badge: "⭐ Top vendedor" },
    { id: 2, icon: "🎬", cat: "Video", name: "Video de 30 segundos para redes", price: 89, delivery: "5 días", rating: 4.8, reviews: 74, seller: "VideoMX Pro" },
    { id: 3, icon: "📸", cat: "Fotografía", name: "Sesión de fotos para negocio", price: 120, delivery: "2 días", rating: 5.0, reviews: 43, seller: "Foto Studio CO", badge: "✨ Nuevo" },
    { id: 4, icon: "🌐", cat: "Web", name: "Página web profesional (5 páginas)", price: 299, delivery: "7 días", rating: 4.7, reviews: 91, seller: "WebLatam" },
    { id: 5, icon: "📝", cat: "Copy", name: "Pack de 10 copys para redes", price: 35, delivery: "1 día", rating: 4.9, reviews: 203, seller: "Copywriter LATAM", badge: "⭐ Top vendedor" },
    { id: 6, icon: "🧠", cat: "Consultoría", name: "Sesión de estrategia digital (1 hora)", price: 60, delivery: "Inmediato", rating: 5.0, reviews: 38, seller: "Marketing Expert HN" },
  ],
  en: [
    { id: 1, icon: "🎨", cat: "Design", name: "Professional logo", price: 49, delivery: "3 days", rating: 4.9, reviews: 128, seller: "Creative Studio HN", badge: "⭐ Top seller" },
    { id: 2, icon: "🎬", cat: "Video", name: "30-second social media video", price: 89, delivery: "5 days", rating: 4.8, reviews: 74, seller: "VideoMX Pro" },
    { id: 3, icon: "📸", cat: "Photography", name: "Business photo session", price: 120, delivery: "2 days", rating: 5.0, reviews: 43, seller: "Foto Studio CO", badge: "✨ New" },
    { id: 4, icon: "🌐", cat: "Web", name: "Professional website (5 pages)", price: 299, delivery: "7 days", rating: 4.7, reviews: 91, seller: "WebLatam" },
    { id: 5, icon: "📝", cat: "Copy", name: "Pack of 10 social media copies", price: 35, delivery: "1 day", rating: 4.9, reviews: 203, seller: "Copywriter LATAM", badge: "⭐ Top seller" },
    { id: 6, icon: "🧠", cat: "Consulting", name: "Digital strategy session (1 hour)", price: 60, delivery: "Immediate", rating: 5.0, reviews: 38, seller: "Marketing Expert HN" },
  ]
};
const T = { es: { title: "Voxa Marketplace", sub: "Servicios profesionales para hacer crecer tu negocio — todos verificados por Voxa", commission: "Voxa cobra 15% de comisión por transacción", orderBtn: "Contratar", rating: "valoraciones", delivery: "Entrega", allCats: "Todos", search: "Buscar servicios..." }, en: { title: "Voxa Marketplace", sub: "Professional services to grow your business — all verified by Voxa", commission: "Voxa charges 15% commission per transaction", orderBtn: "Hire", rating: "ratings", delivery: "Delivery", allCats: "All", search: "Search services..." } };
function LangToggle({ lang, setLang }) { return (<div style={{ display: "flex", background: "#f3f4f6", borderRadius: 8, padding: 3, gap: 2 }}>{["es","en"].map(l => (<button key={l} onClick={() => setLang(l)} style={{ padding: "5px 12px", borderRadius: 6, border: "none", cursor: "pointer", fontSize: 12, fontWeight: 700, background: l === lang ? "white" : "transparent", color: l === lang ? "#26215C" : "#9ca3af" }}>{l === "es" ? "🇪🇸 ES" : "🇺🇸 EN"}</button>))}</div>); }
export default function VoxaMarketplace() {
  const [lang, setLang] = useState("es");
  const [cat, setCat] = useState("all");
  const [search, setSearch] = useState("");
  const [ordered, setOrdered] = useState(null);
  const t = T[lang];
  const services = SERVICES[lang];
  const cats = ["all", ...new Set(services.map(s => s.cat))];
  const filtered = services.filter(s => (cat === "all" || s.cat === cat) && (s.name.toLowerCase().includes(search.toLowerCase()) || s.cat.toLowerCase().includes(search.toLowerCase())));
  return (
    <div style={{ fontFamily: "'Inter',system-ui,sans-serif", background: "#f5f3ef", minHeight: "100vh" }}>
      <div style={{ background: "#26215C", padding: "0 5%", height: 62, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
          <div style={{ width: 30, height: 30, background: "#A32D2D", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, color: "white", fontSize: 14 }}>V</div>
          <span style={{ fontWeight: 900, fontSize: 17, color: "white" }}>Voxa Marketplace</span>
        </div>
        <LangToggle lang={lang} setLang={setLang} />
      </div>
      <div style={{ background: "linear-gradient(135deg,#26215C,#A32D2D)", padding: "24px 5%" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontSize: 22, fontWeight: 900, color: "white", margin: "0 0 4px" }}>{t.title}</h2>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", margin: "0 0 16px" }}>{t.sub}</p>
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder={t.search} style={{ width: "100%", padding: "12px 16px", fontSize: 14, borderRadius: 12, border: "none", outline: "none", boxSizing: "border-box" }} />
        </div>
      </div>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "20px 5%" }}>
        <div style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" }}>
          {cats.map(c => <button key={c} onClick={() => setCat(c)} style={{ padding: "7px 16px", borderRadius: 20, border: cat === c ? "none" : "1px solid #e5e7eb", background: cat === c ? "#26215C" : "white", color: cat === c ? "white" : "#374151", fontSize: 13, fontWeight: cat === c ? 700 : 400, cursor: "pointer" }}>{c === "all" ? t.allCats : c}</button>)}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))", gap: 14 }}>
          {filtered.map(s => (
            <div key={s.id} style={{ background: "white", border: "1px solid #e8e8f0", borderRadius: 16, overflow: "hidden" }}>
              <div style={{ background: "#fafafa", padding: "24px", textAlign: "center", fontSize: 48 }}>{s.icon}</div>
              <div style={{ padding: "14px 16px" }}>
                {s.badge && <span style={{ fontSize: 11, fontWeight: 700, color: "#A32D2D", background: "#fff5f5", padding: "2px 8px", borderRadius: 20, display: "inline-block", marginBottom: 6 }}>{s.badge}</span>}
                <p style={{ fontSize: 14, fontWeight: 700, color: "#26215C", margin: "0 0 4px" }}>{s.name}</p>
                <p style={{ fontSize: 12, color: "#9ca3af", margin: "0 0 10px" }}>{s.seller}</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                  <div><span style={{ color: "#f59e0b" }}>{"★".repeat(Math.floor(s.rating))}</span><span style={{ fontSize: 12, color: "#9ca3af", marginLeft: 4 }}>{s.rating} ({s.reviews} {t.rating})</span></div>
                  <span style={{ fontSize: 12, color: "#6b7280" }}>📦 {t.delivery}: {s.delivery}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 22, fontWeight: 900, color: "#26215C" }}>${s.price}</span>
                  <button onClick={() => setOrdered(s)} style={{ padding: "8px 16px", borderRadius: 9, border: "none", background: "#A32D2D", color: "white", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>{t.orderBtn}</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {ordered && (
          <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100, padding: "1rem" }}>
            <div style={{ background: "white", borderRadius: 18, padding: "28px", maxWidth: 400, width: "100%", textAlign: "center" }}>
              <div style={{ fontSize: 48, marginBottom: 12 }}>{ordered.icon}</div>
              <h3 style={{ fontSize: 18, fontWeight: 800, color: "#26215C", margin: "0 0 6px" }}>{ordered.name}</h3>
              <p style={{ fontSize: 14, color: "#6b7280", margin: "0 0 16px" }}>{ordered.seller}</p>
              <div style={{ background: "#FFF8F5", border: "1px solid #F5C6C6", borderRadius: 10, padding: "12px", marginBottom: 16, textAlign: "left" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}><span style={{ fontSize: 13, color: "#6b7280" }}>Servicio</span><span style={{ fontSize: 13, fontWeight: 700 }}>${ordered.price}</span></div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}><span style={{ fontSize: 13, color: "#6b7280" }}>Comisión Voxa (15%)</span><span style={{ fontSize: 13, fontWeight: 700, color: "#A32D2D" }}>-${(ordered.price * 0.15).toFixed(0)}</span></div>
                <div style={{ display: "flex", justifyContent: "space-between" }}><span style={{ fontSize: 13, fontWeight: 700 }}>Total</span><span style={{ fontSize: 16, fontWeight: 900, color: "#26215C" }}>${ordered.price}</span></div>
              </div>
              <div style={{ display: "flex", gap: 10 }}>
                <button onClick={() => setOrdered(null)} style={{ flex: 1, padding: "11px", borderRadius: 10, border: "1px solid #e8e8f0", background: "white", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>Cancelar</button>
                <button onClick={() => { alert(lang === "es" ? "¡Pedido realizado! El proveedor te contactará en breve." : "Order placed! The provider will contact you soon."); setOrdered(null); }} style={{ flex: 1, padding: "11px", borderRadius: 10, border: "none", background: "#A32D2D", color: "white", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>Pagar ${ordered.price}</button>
              </div>
            </div>
          </div>
        )}
        <div style={{ background: "#FFF8F5", border: "1px solid #F5C6C6", borderRadius: 12, padding: "12px 16px", marginTop: 20 }}>
          <p style={{ fontSize: 12, color: "#A32D2D", margin: 0, fontWeight: 600 }}>💼 {t.commission}</p>
        </div>
      </div>
    </div>
  );
}

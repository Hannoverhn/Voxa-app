import { useState } from "react";

const T = {
  es: {
    nav: { campaigns: "Campañas", analytics: "Analytics", creatives: "Creativos", channels: "Canales", billing: "Facturación", settings: "Ajustes" },
    newCampaign: "⚡ Nueva campaña",
    plan: "Plan Pro",
    planSub: "Campañas ilimitadas",
    trialEnds: "Tu prueba termina en",
    days: "días",
    upgrade: "Mejorar plan →",
    stats: { spent: "Gasto total", conversions: "Conversiones", clicks: "Clics totales", impressions: "Impresiones", thisMonth: "este mes", allCampaigns: "todas las campañas", totalReach: "alcance total" },
    table: { title: "Todas las campañas", count: "campañas", created: "Creado", budget: "de", convs: "conversiones" },
    status: { activa: "activa", pausada: "pausada", borrador: "borrador" },
    detail: { performance: "Rendimiento", budgetUsed: "Presupuesto usado", ctr: "CTR", cpa: "CPA promedio", impressions: "Impresiones", clicks: "Clics", conversions: "Conversiones", created: "Creado", activeCopies: "Copies activos", edit: "Editar", pause: "Pausar", activate: "Activar" },
    empty: { title: "Crea tu primera campaña", sub: "Describe tu negocio y Voxa genera anuncios profesionales en 52 segundos.", btn: "⚡ Crear campaña" },
    modal: { title: "Nueva campaña", sub: "Completa los pasos para crear tu campaña con IA en segundos.", steps: ["Describe tu negocio", "Elige el objetivo", "Define tu audiencia"], btn: "⚡ Generar con IA" },
    comingSoon: "Esta sección está en construcción.",
    back: "Volver a campañas",
    welcome: "Bienvenido a Voxa",
    welcomeSub: "Todo listo para crear tu primera campaña.",
    searchPlaceholder: "Buscar campaña...",
    filter: "Filtrar",
    all: "Todas",
    active: "Activas",
    paused: "Pausadas",
    draft: "Borradores",
  },
  en: {
    nav: { campaigns: "Campaigns", analytics: "Analytics", creatives: "Creatives", channels: "Channels", billing: "Billing", settings: "Settings" },
    newCampaign: "⚡ New campaign",
    plan: "Pro Plan",
    planSub: "Unlimited campaigns",
    trialEnds: "Your trial ends in",
    days: "days",
    upgrade: "Upgrade plan →",
    stats: { spent: "Total spent", conversions: "Conversions", clicks: "Total clicks", impressions: "Impressions", thisMonth: "this month", allCampaigns: "all campaigns", totalReach: "total reach" },
    table: { title: "All campaigns", count: "campaigns", created: "Created", budget: "of", convs: "conversions" },
    status: { activa: "active", pausada: "paused", borrador: "draft" },
    detail: { performance: "Performance", budgetUsed: "Budget used", ctr: "CTR", cpa: "Avg. CPA", impressions: "Impressions", clicks: "Clicks", conversions: "Conversions", created: "Created", activeCopies: "Active copies", edit: "Edit", pause: "Pause", activate: "Activate" },
    empty: { title: "Create your first campaign", sub: "Describe your business and Voxa generates professional ads in 52 seconds.", btn: "⚡ Create campaign" },
    modal: { title: "New campaign", sub: "Complete the steps to create your AI campaign in seconds.", steps: ["Describe your business", "Choose your goal", "Define your audience"], btn: "⚡ Generate with AI" },
    comingSoon: "This section is under construction.",
    back: "Back to campaigns",
    welcome: "Welcome to Voxa",
    welcomeSub: "Everything is ready to create your first campaign.",
    searchPlaceholder: "Search campaign...",
    filter: "Filter",
    all: "All",
    active: "Active",
    paused: "Paused",
    draft: "Drafts",
  }
};

const CAMPAIGNS = [
  { id: 1, name: "Ropa deportiva — ventas", nameEn: "Sportswear — sales", canal: "Meta", status: "activa", presupuesto: 150, gastado: 87, impresiones: 14320, clics: 412, conversiones: 28, ctr: 2.88, cpa: 18.5, created: "hace 3 días", createdEn: "3 days ago", copies: [{ titulo: "Tu mejor versión empieza aquí", cta: "Ver colección →" }, { titulo: "Ropa que te acompaña en cada meta", cta: "Comprar ahora →" }] },
  { id: 2, name: "Lanzamiento invierno 2026", nameEn: "Winter 2026 launch", canal: "Google", status: "pausada", presupuesto: 200, gastado: 43, impresiones: 8900, clics: 198, conversiones: 11, ctr: 2.22, cpa: 22.1, created: "hace 6 días", createdEn: "6 days ago", copies: [{ titulo: "Nueva colección invierno 2026", cta: "Descubrir →" }] },
  { id: 3, name: "Leads yoga — mujeres", nameEn: "Yoga leads — women", canal: "TikTok", status: "borrador", presupuesto: 80, gastado: 0, impresiones: 0, clics: 0, conversiones: 0, ctr: 0, cpa: 0, created: "hace 1 día", createdEn: "1 day ago", copies: [{ titulo: "Yoga para mujeres ocupadas", cta: "Quiero más info →" }] },
  { id: 4, name: "Multi-canal — temporada", nameEn: "Multi-channel — season", canal: "Todos", status: "activa", presupuesto: 300, gastado: 201, impresiones: 31200, clics: 890, conversiones: 54, ctr: 3.12, cpa: 14.2, created: "hace 8 días", createdEn: "8 days ago", copies: [{ titulo: "La temporada más esperada llegó", cta: "Aprovechar oferta →" }] },
];

const STATUS_STYLE = {
  activa:   { bg: "#f0fdf4", text: "#16a34a", dot: "#22c55e" },
  pausada:  { bg: "#fefce8", text: "#b45309", dot: "#f59e0b" },
  borrador: { bg: "#FFF5F0", text: "#A32D2D", dot: "#A32D2D" },
};

const CANAL_COLOR = { Meta: "#1877F2", Google: "#EA4335", TikTok: "#000", Todos: "#A32D2D" };

function LangToggle({ lang, setLang }) {
  return (
    <div style={{ display: "flex", background: "rgba(255,255,255,0.08)", borderRadius: 8, padding: 3, gap: 2 }}>
      {["es","en"].map(l => (
        <button key={l} onClick={() => setLang(l)} style={{ padding: "4px 10px", borderRadius: 6, border: "none", cursor: "pointer", fontSize: 11, fontWeight: 700, background: lang === l ? "rgba(255,255,255,0.15)" : "transparent", color: lang === l ? "white" : "rgba(255,255,255,0.4)", transition: "all .15s" }}>
          {l === "es" ? "🇪🇸 ES" : "🇺🇸 EN"}
        </button>
      ))}
    </div>
  );
}

function MiniBar({ pct, color }) {
  return (
    <div style={{ background: "#f3f4f6", borderRadius: 4, height: 6, width: "100%", overflow: "hidden" }}>
      <div style={{ width: `${Math.min(pct * 100, 100)}%`, height: "100%", background: color, borderRadius: 4, transition: "width .5s" }} />
    </div>
  );
}

function StatCard({ label, value, sub, accent }) {
  return (
    <div style={{ background: "white", border: "1px solid #e8e8f0", borderRadius: 12, padding: "16px 20px", flex: 1, minWidth: 110 }}>
      <p style={{ fontSize: 11, color: "#9ca3af", fontWeight: 700, margin: "0 0 6px", textTransform: "uppercase", letterSpacing: "0.05em" }}>{label}</p>
      <p style={{ fontSize: 26, fontWeight: 900, color: accent || "#08080a", margin: "0 0 2px", letterSpacing: "-0.03em", lineHeight: 1 }}>{value}</p>
      {sub && <p style={{ fontSize: 11, color: "#9ca3af", margin: 0 }}>{sub}</p>}
    </div>
  );
}

export default function VoxaDashboard() {
  const [lang, setLang] = useState("es");
  const [view, setView] = useState("campaigns");
  const [selected, setSelected] = useState(CAMPAIGNS[0]);
  const [showNew, setShowNew] = useState(false);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [campaigns, setCampaigns] = useState(CAMPAIGNS);
  const t = T[lang];

  const totalGastado = campaigns.reduce((a, c) => a + c.gastado, 0);
  const totalConv = campaigns.reduce((a, c) => a + c.conversiones, 0);
  const totalClics = campaigns.reduce((a, c) => a + c.clics, 0);
  const totalImp = campaigns.reduce((a, c) => a + c.impresiones, 0);

  const filtered = campaigns.filter(c => {
    const name = lang === "es" ? c.name : c.nameEn;
    const matchSearch = name.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filterStatus === "all" || c.status === filterStatus;
    return matchSearch && matchFilter;
  });

  const toggleStatus = (id) => {
    setCampaigns(prev => prev.map(c => {
      if (c.id !== id) return c;
      return { ...c, status: c.status === "activa" ? "pausada" : "activa" };
    }));
    if (selected?.id === id) {
      setSelected(prev => ({ ...prev, status: prev.status === "activa" ? "pausada" : "activa" }));
    }
  };

  const navItems = [
    { id: "campaigns", icon: "📊", label: t.nav.campaigns },
    { id: "analytics", icon: "📈", label: t.nav.analytics },
    { id: "creatives", icon: "🎨", label: t.nav.creatives },
    { id: "channels", icon: "🔗", label: t.nav.channels },
    { id: "billing", icon: "💳", label: t.nav.billing },
    { id: "settings", icon: "⚙️", label: t.nav.settings },
  ];

  const filterBtns = [
    { id: "all", label: t.all },
    { id: "activa", label: t.active },
    { id: "pausada", label: t.paused },
    { id: "borrador", label: t.draft },
  ];

  return (
    <div style={{ fontFamily: "'Inter',system-ui,sans-serif", background: "#f8f8fc", minHeight: "100vh", display: "flex" }}>

      {/* SIDEBAR */}
      <div style={{ width: 220, background: "#26215C", display: "flex", flexDirection: "column", flexShrink: 0 }}>
        {/* Logo */}
        <div style={{ padding: "20px 20px 18px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
            <div style={{ width: 32, height: 32, background: "linear-gradient(135deg,#26215C,#A32D2D)", borderRadius: 9, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, color: "white", fontSize: 15 }}>V</div>
            <span style={{ fontWeight: 900, fontSize: 18, color: "white", letterSpacing: "-0.04em" }}>Voxa</span>
          </div>
        </div>

        {/* Nav */}
        <nav style={{ padding: "14px 10px", flex: 1 }}>
          {navItems.map(item => (
            <button key={item.id} onClick={() => setView(item.id)}
              style={{ display: "flex", alignItems: "center", gap: 10, width: "100%", padding: "9px 12px", borderRadius: 8, border: "none", cursor: "pointer", background: view === item.id ? "rgba(124,58,237,0.2)" : "transparent", color: view === item.id ? "#FAEEDA" : "rgba(255,255,255,0.4)", fontSize: 13, fontWeight: view === item.id ? 700 : 400, marginBottom: 2, textAlign: "left", transition: "all .15s" }}>
              <span style={{ fontSize: 15 }}>{item.icon}</span>
              {item.label}
              {view === item.id && <div style={{ marginLeft: "auto", width: 4, height: 4, borderRadius: "50%", background: "#A32D2D" }} />}
            </button>
          ))}
        </nav>

        {/* Trial widget */}
        <div style={{ padding: "14px 12px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div style={{ background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.2)", borderRadius: 10, padding: "14px" }}>
            <p style={{ fontSize: 11, color: "#A32D2D", fontWeight: 700, margin: "0 0 2px", textTransform: "uppercase", letterSpacing: "0.05em" }}>{t.plan}</p>
            <p style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", margin: "0 0 10px" }}>{t.planSub}</p>
            <div style={{ background: "rgba(255,255,255,0.08)", borderRadius: 4, height: 4, marginBottom: 8 }}>
              <div style={{ width: "60%", height: "100%", background: "linear-gradient(90deg,#A32D2D,#A32D2D)", borderRadius: 4 }} />
            </div>
            <p style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", margin: "0 0 10px" }}>{t.trialEnds} <strong style={{ color: "#fbbf24" }}>18 {t.days}</strong></p>
            <LangToggle lang={lang} setLang={setLang} />
          </div>
        </div>
      </div>

      {/* MAIN */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "auto", minWidth: 0 }}>

        {/* TOP BAR */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 24px", height: 62, background: "white", borderBottom: "1px solid #e8e8f0", flexShrink: 0, gap: 12 }}>
          <div>
            <p style={{ fontSize: 16, fontWeight: 800, color: "#08080a", margin: 0, letterSpacing: "-0.02em" }}>
              {navItems.find(n => n.id === view)?.label}
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            {view === "campaigns" && (
              <div style={{ position: "relative" }}>
                <input value={search} onChange={e => setSearch(e.target.value)} placeholder={t.searchPlaceholder}
                  style={{ padding: "7px 12px 7px 32px", borderRadius: 9, border: "1px solid #e8e8f0", fontSize: 13, outline: "none", width: 200, color: "#374151", background: "#f8f8fc" }} />
                <span style={{ position: "absolute", left: 10, top: "50%", transform: "translateY(-50%)", color: "#9ca3af", fontSize: 14 }}>🔍</span>
              </div>
            )}
            <button onClick={() => setShowNew(true)} style={{ display: "flex", alignItems: "center", gap: 6, background: "linear-gradient(135deg,#26215C,#A32D2D)", color: "white", border: "none", padding: "9px 18px", borderRadius: 9, fontSize: 13, fontWeight: 700, cursor: "pointer", boxShadow: "0 2px 12px rgba(91,33,182,.3)" }}>
              {t.newCampaign}
            </button>
            <div style={{ width: 36, height: 36, borderRadius: "50%", background: "linear-gradient(135deg,#26215C,#A32D2D)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, color: "white", flexShrink: 0 }}>TU</div>
          </div>
        </div>

        <div style={{ padding: "22px 24px", flex: 1 }}>

          {/* CAMPAIGNS VIEW */}
          {view === "campaigns" && (
            <>
              {/* STATS */}
              <div style={{ display: "flex", gap: 12, marginBottom: 20, flexWrap: "wrap" }}>
                <StatCard label={t.stats.spent} value={`$${totalGastado}`} sub={t.stats.thisMonth} />
                <StatCard label={t.stats.conversions} value={totalConv} sub={t.stats.allCampaigns} accent="#16a34a" />
                <StatCard label={t.stats.clicks} value={totalClics.toLocaleString()} sub={`CTR 2.8%`} />
                <StatCard label={t.stats.impressions} value={`${Math.round(totalImp/1000)}k`} sub={t.stats.totalReach} />
              </div>

              {/* FILTER TABS */}
              <div style={{ display: "flex", gap: 6, marginBottom: 14 }}>
                {filterBtns.map(fb => (
                  <button key={fb.id} onClick={() => setFilterStatus(fb.id)}
                    style={{ padding: "6px 14px", borderRadius: 8, border: "none", cursor: "pointer", fontSize: 12, fontWeight: 600, background: filterStatus === fb.id ? "#26215C" : "#f3f4f6", color: filterStatus === fb.id ? "white" : "#6b7280", transition: "all .15s" }}>
                    {fb.label}
                  </button>
                ))}
              </div>

              {/* TABLE + DETAIL */}
              <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>

                {/* TABLE */}
                <div style={{ flex: 1.5, background: "white", border: "1px solid #e8e8f0", borderRadius: 14, overflow: "hidden", minWidth: 0 }}>
                  <div style={{ padding: "14px 18px", borderBottom: "1px solid #f0f0f5", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <p style={{ fontSize: 13, fontWeight: 700, color: "#08080a", margin: 0 }}>{t.table.title}</p>
                    <span style={{ fontSize: 12, color: "#9ca3af" }}>{filtered.length} {t.table.count}</span>
                  </div>

                  {filtered.length === 0 ? (
                    <div style={{ padding: "48px 24px", textAlign: "center" }}>
                      <p style={{ fontSize: 32, margin: "0 0 12px" }}>🔍</p>
                      <p style={{ fontSize: 14, fontWeight: 700, color: "#08080a", margin: "0 0 6px" }}>{lang === "es" ? "Sin resultados" : "No results"}</p>
                      <p style={{ fontSize: 13, color: "#9ca3af", margin: 0 }}>{lang === "es" ? "Intenta con otra búsqueda" : "Try a different search"}</p>
                    </div>
                  ) : filtered.map(c => {
                    const name = lang === "es" ? c.name : c.nameEn;
                    const created = lang === "es" ? c.created : c.createdEn;
                    const sc = STATUS_STYLE[c.status];
                    const statusLabel = t.status[c.status];
                    return (
                      <div key={c.id} onClick={() => setSelected(c)}
                        style={{ display: "flex", alignItems: "center", gap: 12, padding: "13px 18px", borderBottom: "1px solid #f5f5fa", cursor: "pointer", background: selected?.id === c.id ? "#fafaf8" : "white", transition: "background .1s" }}>
                        <div style={{ flex: 2, minWidth: 0 }}>
                          <p style={{ fontSize: 13, fontWeight: 700, color: "#08080a", margin: "0 0 3px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{name}</p>
                          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                            <span style={{ fontSize: 10, fontWeight: 700, color: CANAL_COLOR[c.canal], background: `${CANAL_COLOR[c.canal]}18`, padding: "2px 7px", borderRadius: 4 }}>{c.canal}</span>
                            <span style={{ fontSize: 11, color: "#9ca3af" }}>{created}</span>
                          </div>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                          <div style={{ width: 7, height: 7, borderRadius: "50%", background: sc.dot }} />
                          <span style={{ fontSize: 11, fontWeight: 600, color: sc.text, background: sc.bg, padding: "3px 8px", borderRadius: 5 }}>{statusLabel}</span>
                        </div>
                        <div style={{ textAlign: "right", minWidth: 70 }}>
                          <p style={{ fontSize: 13, fontWeight: 700, color: "#08080a", margin: "0 0 1px" }}>${c.gastado}</p>
                          <p style={{ fontSize: 10, color: "#9ca3af", margin: 0 }}>{t.table.budget} ${c.presupuesto}</p>
                        </div>
                        <div style={{ textAlign: "right", minWidth: 60 }}>
                          <p style={{ fontSize: 13, fontWeight: 700, color: "#16a34a", margin: "0 0 1px" }}>{c.conversiones}</p>
                          <p style={{ fontSize: 10, color: "#9ca3af", margin: 0 }}>{t.table.convs}</p>
                        </div>
                        <span style={{ color: "#d1d5db", fontSize: 14 }}>›</span>
                      </div>
                    );
                  })}
                </div>

                {/* DETAIL PANEL */}
                {selected && (
                  <div style={{ width: 272, background: "white", border: "1px solid #e8e8f0", borderRadius: 14, overflow: "hidden", flexShrink: 0 }}>
                    <div style={{ padding: "16px 18px", borderBottom: "1px solid #f0f0f5" }}>
                      <p style={{ fontSize: 13, fontWeight: 800, color: "#08080a", margin: "0 0 6px", lineHeight: 1.3 }}>{lang === "es" ? selected.name : selected.nameEn}</p>
                      <div style={{ display: "flex", gap: 6 }}>
                        <span style={{ fontSize: 10, fontWeight: 700, color: CANAL_COLOR[selected.canal], background: `${CANAL_COLOR[selected.canal]}18`, padding: "2px 8px", borderRadius: 4 }}>{selected.canal}</span>
                        <span style={{ fontSize: 10, fontWeight: 600, color: STATUS_STYLE[selected.status].text, background: STATUS_STYLE[selected.status].bg, padding: "2px 8px", borderRadius: 4 }}>{t.status[selected.status]}</span>
                      </div>
                    </div>

                    <div style={{ padding: "14px 18px" }}>
                      <p style={{ fontSize: 10, fontWeight: 700, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.06em", margin: "0 0 12px" }}>{t.detail.performance}</p>

                      {[
                        { label: t.detail.budgetUsed, val: `$${selected.gastado} / $${selected.presupuesto}`, pct: selected.gastado / selected.presupuesto, color: "#A32D2D" },
                        { label: t.detail.ctr, val: `${selected.ctr.toFixed(2)}%`, pct: selected.ctr / 5, color: "#16a34a" },
                        { label: t.detail.cpa, val: selected.cpa > 0 ? `$${selected.cpa.toFixed(1)}` : "—", pct: 0.5, color: "#f59e0b" },
                      ].map(m => (
                        <div key={m.label} style={{ marginBottom: 14 }}>
                          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
                            <span style={{ fontSize: 12, color: "#6b7280" }}>{m.label}</span>
                            <span style={{ fontSize: 12, fontWeight: 700, color: "#08080a" }}>{m.val}</span>
                          </div>
                          <MiniBar pct={m.pct} color={m.color} />
                        </div>
                      ))}

                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 16 }}>
                        {[
                          { l: t.detail.impressions, v: selected.impresiones.toLocaleString() },
                          { l: t.detail.clicks, v: selected.clics.toLocaleString() },
                          { l: t.detail.conversions, v: selected.conversiones },
                          { l: t.detail.created, v: lang === "es" ? selected.created : selected.createdEn },
                        ].map(s => (
                          <div key={s.l} style={{ background: "#fafafa", borderRadius: 8, padding: "10px 12px" }}>
                            <p style={{ fontSize: 10, color: "#9ca3af", margin: "0 0 2px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.04em" }}>{s.l}</p>
                            <p style={{ fontSize: 14, fontWeight: 800, color: "#08080a", margin: 0 }}>{s.v}</p>
                          </div>
                        ))}
                      </div>

                      <div style={{ marginTop: 16, borderTop: "1px solid #f0f0f5", paddingTop: 14 }}>
                        <p style={{ fontSize: 10, fontWeight: 700, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.06em", margin: "0 0 10px" }}>{t.detail.activeCopies}</p>
                        {selected.copies.map((cp, i) => (
                          <div key={i} style={{ background: "#FFF5F0", border: "1px solid #FAEEDA", borderRadius: 9, padding: "10px 13px", marginBottom: 8 }}>
                            <p style={{ fontSize: 12, fontWeight: 700, color: "#08080a", margin: "0 0 3px", lineHeight: 1.3 }}>{cp.titulo}</p>
                            <p style={{ fontSize: 11, color: "#A32D2D", margin: 0, fontWeight: 600 }}>{cp.cta}</p>
                          </div>
                        ))}
                      </div>

                      <div style={{ marginTop: 14, display: "flex", gap: 8 }}>
                        <button style={{ flex: 1, padding: "9px", borderRadius: 9, border: "1px solid #e8e8f0", background: "white", fontSize: 12, fontWeight: 700, color: "#374151", cursor: "pointer" }}>{t.detail.edit}</button>
                        <button onClick={() => toggleStatus(selected.id)}
                          style={{ flex: 1, padding: "9px", borderRadius: 9, border: "none", background: selected.status === "activa" ? "#fef2f2" : "linear-gradient(135deg,#26215C,#A32D2D)", color: selected.status === "activa" ? "#ef4444" : "white", fontSize: 12, fontWeight: 700, cursor: "pointer" }}>
                          {selected.status === "activa" ? t.detail.pause : t.detail.activate}
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </>
          )}

          {/* OTHER VIEWS */}
          {view !== "campaigns" && (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: 400, gap: 14 }}>
              <div style={{ fontSize: 52 }}>
                {view === "analytics" ? "📈" : view === "creatives" ? "🎨" : view === "channels" ? "🔗" : view === "billing" ? "💳" : "⚙️"}
              </div>
              <p style={{ fontSize: 18, fontWeight: 800, color: "#08080a", margin: 0 }}>
                {navItems.find(n => n.id === view)?.label}
              </p>
              <p style={{ fontSize: 14, color: "#9ca3af", margin: 0, textAlign: "center", maxWidth: 340 }}>{t.comingSoon}</p>
              <button onClick={() => setView("campaigns")} style={{ marginTop: 8, padding: "10px 22px", background: "linear-gradient(135deg,#26215C,#A32D2D)", color: "white", border: "none", borderRadius: 9, fontSize: 13, fontWeight: 700, cursor: "pointer" }}>
                {t.back}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* MODAL NUEVA CAMPAÑA */}
      {showNew && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.55)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 200, padding: "1rem" }}>
          <div style={{ background: "white", borderRadius: 20, padding: "32px", width: "100%", maxWidth: 440, maxHeight: "90vh", overflow: "auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 26, height: 26, background: "linear-gradient(135deg,#26215C,#A32D2D)", borderRadius: 7, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, color: "white", fontSize: 12 }}>V</div>
                <p style={{ fontSize: 16, fontWeight: 800, color: "#08080a", margin: 0 }}>{t.modal.title}</p>
              </div>
              <button onClick={() => setShowNew(false)} style={{ background: "none", border: "none", fontSize: 22, cursor: "pointer", color: "#9ca3af", lineHeight: 1 }}>×</button>
            </div>
            <p style={{ fontSize: 14, color: "#6b7280", marginBottom: 24, lineHeight: 1.6 }}>{t.modal.sub}</p>

            {t.modal.steps.map((step, i) => (
              <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start", marginBottom: 20 }}>
                <div style={{ width: 28, height: 28, background: "linear-gradient(135deg,#26215C,#A32D2D)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: "white", flexShrink: 0 }}>{i + 1}</div>
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: 13, fontWeight: 700, color: "#08080a", margin: "0 0 6px" }}>{step}</p>
                  <div style={{ height: 38, background: "#f8f8fc", border: "1px solid #e8e8f0", borderRadius: 9 }} />
                </div>
              </div>
            ))}

            <button onClick={() => setShowNew(false)}
              style={{ width: "100%", padding: "14px", background: "linear-gradient(135deg,#26215C,#A32D2D)", color: "white", border: "none", borderRadius: 11, fontSize: 14, fontWeight: 800, cursor: "pointer", marginTop: 8, boxShadow: "0 4px 16px rgba(91,33,182,.3)" }}>
              {t.modal.btn}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

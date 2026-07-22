import { useState } from "react";

const T = {
  es: {
    title: "Voxa Agency", sub: "Gestiona todos tus clientes desde un solo panel. Vende marketing usando Voxa como infraestructura.",
    tabs: ["Mis clientes", "Crear cliente", "Reportes", "Configuración"],
    addClient: "+ Nuevo cliente", totalClients: "Clientes activos", totalCampaigns: "Campañas este mes", totalRevenue: "Facturación mensual",
    clientName: "Nombre del cliente", businessType: "Tipo de negocio", plan: "Plan asignado",
    plans: ["Básico", "Pro", "Premium"], status: "Estado", active: "Activo", inactive: "Inactivo",
    campaigns: "campañas", viewBtn: "Ver panel", createBtn: "Crear campaña", reportBtn: "Reporte",
    nameLabel: "Nombre del negocio", namePh: "Ej: Restaurante La Palma",
    contactLabel: "Contacto principal", contactPh: "Nombre del dueño",
    emailLabel: "Email", emailPh: "cliente@email.com",
    phoneLabel: "WhatsApp", phonePh: "+504 9999-9999",
    typeLabel: "Tipo de negocio",
    types: ["Restaurante", "Belleza", "Retail", "Servicios Pro", "Otro"],
    planLabel: "Plan mensual a cobrar",
    agencyPlans: [
      { name: "Básico", price: 49, features: ["5 campañas/mes", "1 canal", "Reporte mensual"] },
      { name: "Pro", price: 99, features: ["Campañas ilimitadas", "Todos los canales", "Reporte semanal", "Voxa Predict"] },
      { name: "Premium", price: 199, features: ["Campañas ilimitadas", "Todos los canales", "Reporte diario", "Autopilot activo", "Agente especialista"] },
    ],
    budgetLabel: "Presupuesto mensual de pauta", budgetPh: "Ej: 150",
    notesLabel: "Notas internas", notesPh: "Notas sobre este cliente...",
    saveClientBtn: "💾 Crear cliente", saving: "Guardando...",
    clientCreated: "¡Cliente creado!", clientCreatedSub: "Ya puedes gestionar sus campañas desde el panel.",
    whitelabelTitle: "Marca blanca", whitelabelSub: "Tus clientes ven tu marca, no Voxa",
    whitelabelToggle: "Activar marca blanca",
    agencyName: "Nombre de tu agencia", agencyNamePh: "Ej: Marketing Solutions HN",
    agencyLogo: "Logo de tu agencia",
    collaboratorsTitle: "Colaboradores",
    collaboratorsSub: "Usuarios con acceso a tu panel de agencia",
    addCollaborator: "+ Agregar colaborador",
    billingTitle: "Facturación recurrente",
    billingSub: "Cobra automáticamente a tus clientes cada mes",
    invoicesTitle: "Facturas del mes",
    totalBilled: "Total facturado",
    pending: "Pendiente", paid: "Pagado", overdue: "Vencido",
  },
  en: {
    title: "Voxa Agency", sub: "Manage all your clients from one panel. Sell marketing using Voxa as infrastructure.",
    tabs: ["My clients", "Add client", "Reports", "Settings"],
    addClient: "+ New client", totalClients: "Active clients", totalCampaigns: "Campaigns this month", totalRevenue: "Monthly billing",
    clientName: "Client name", businessType: "Business type", plan: "Assigned plan",
    plans: ["Basic", "Pro", "Premium"], status: "Status", active: "Active", inactive: "Inactive",
    campaigns: "campaigns", viewBtn: "View panel", createBtn: "Create campaign", reportBtn: "Report",
    nameLabel: "Business name", namePh: "E.g.: La Palma Restaurant",
    contactLabel: "Main contact", contactPh: "Owner name",
    emailLabel: "Email", emailPh: "client@email.com",
    phoneLabel: "WhatsApp", phonePh: "+1 555 999-9999",
    typeLabel: "Business type",
    types: ["Restaurant", "Beauty", "Retail", "Pro Services", "Other"],
    planLabel: "Monthly plan to charge",
    agencyPlans: [
      { name: "Basic", price: 49, features: ["5 campaigns/month", "1 channel", "Monthly report"] },
      { name: "Pro", price: 99, features: ["Unlimited campaigns", "All channels", "Weekly report", "Voxa Predict"] },
      { name: "Premium", price: 199, features: ["Unlimited campaigns", "All channels", "Daily report", "Autopilot active", "Specialist agent"] },
    ],
    budgetLabel: "Monthly ad budget", budgetPh: "E.g.: 150",
    notesLabel: "Internal notes", notesPh: "Notes about this client...",
    saveClientBtn: "💾 Create client", saving: "Saving...",
    clientCreated: "Client created!", clientCreatedSub: "You can now manage their campaigns from the panel.",
    whitelabelTitle: "White label", whitelabelSub: "Your clients see your brand, not Voxa",
    whitelabelToggle: "Enable white label",
    agencyName: "Your agency name", agencyNamePh: "E.g.: Marketing Solutions HN",
    agencyLogo: "Your agency logo",
    collaboratorsTitle: "Collaborators",
    collaboratorsSub: "Users with access to your agency panel",
    addCollaborator: "+ Add collaborator",
    billingTitle: "Recurring billing",
    billingSub: "Automatically charge your clients every month",
    invoicesTitle: "This month's invoices",
    totalBilled: "Total billed",
    pending: "Pending", paid: "Paid", overdue: "Overdue",
  }
};

const MOCK_CLIENTS = [
  { id: 1, name: "Salón Bella", type: "Belleza", plan: "Pro", status: "active", campaigns: 8, revenue: 99, color: "#be185d" },
  { id: 2, name: "Café Central", type: "Restaurante", plan: "Básico", status: "active", campaigns: 4, revenue: 49, color: "#b45309" },
  { id: 3, name: "Boutique Style", type: "Retail", plan: "Premium", status: "active", campaigns: 12, revenue: 199, color: "#0369a1" },
  { id: 4, name: "Dr. Martínez", type: "Servicios Pro", plan: "Pro", status: "inactive", campaigns: 0, revenue: 0, color: "#374151" },
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

export default function VoxaAgency() {
  const [lang, setLang] = useState("es");
  const [tab, setTab] = useState(0);
  const [clients, setClients] = useState(MOCK_CLIENTS);
  const [form, setForm] = useState({ name: "", contact: "", email: "", phone: "", type: "", plan: "", budget: "", notes: "" });
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [whitelabel, setWhitelabel] = useState(false);
  const [agencyName, setAgencyName] = useState("");
  const t = T[lang];

  const totalRevenue = clients.filter(c => c.status === "active").reduce((a, c) => a + c.revenue, 0);
  const totalCampaigns = clients.reduce((a, c) => a + c.campaigns, 0);

  const saveClient = async () => {
    if (!form.name.trim()) return;
    setSaving(true);
    await new Promise(r => setTimeout(r, 1200));
    setClients(prev => [...prev, { id: Date.now(), name: form.name, type: form.type || "Otro", plan: form.plan || "Pro", status: "active", campaigns: 0, revenue: t.agencyPlans.find(p => p.name === form.plan)?.price || 99, color: "#26215C" }]);
    setSaving(false); setSaved(true);
    setTimeout(() => { setSaved(false); setTab(0); setForm({ name: "", contact: "", email: "", phone: "", type: "", plan: "", budget: "", notes: "" }); }, 2000);
  };

  const inp = { width: "100%", padding: "11px 14px", fontSize: 14, borderRadius: 10, border: "1.5px solid #e5e7eb", fontFamily: "inherit", color: "#111", outline: "none", boxSizing: "border-box", background: "white" };

  return (
    <div style={{ fontFamily: "'Inter',system-ui,sans-serif", background: "#f5f3ef", minHeight: "100vh" }}>
      <div style={{ background: "#26215C", padding: "0 5%", height: 62, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
          <div style={{ width: 30, height: 30, background: "#A32D2D", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, color: "white", fontSize: 14 }}>V</div>
          <span style={{ fontWeight: 900, fontSize: 17, color: "white" }}>{t.title}</span>
        </div>
        <LangToggle lang={lang} setLang={setLang} />
      </div>

      {/* STATS */}
      <div style={{ background: "linear-gradient(135deg,#1a1730,#26215C)", padding: "20px 5%" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", gap: 16, flexWrap: "wrap" }}>
          {[[t.totalClients, clients.filter(c => c.status === "active").length, "👥"], [t.totalCampaigns, totalCampaigns, "⚡"], [t.totalRevenue, `$${totalRevenue}`, "💰"]].map(([l, v, icon]) => (
            <div key={l} style={{ flex: 1, minWidth: 120, background: "rgba(255,255,255,0.07)", borderRadius: 12, padding: "16px 20px" }}>
              <p style={{ fontSize: 28, margin: "0 0 4px" }}>{icon}</p>
              <p style={{ fontSize: 26, fontWeight: 900, color: "white", margin: "0 0 2px", letterSpacing: "-0.03em" }}>{v}</p>
              <p style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", margin: 0 }}>{l}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ background: "white", borderBottom: "1px solid #e8e8f0", padding: "0 5%", display: "flex", overflowX: "auto" }}>
        {t.tabs.map((tb, i) => (
          <button key={i} onClick={() => setTab(i)}
            style={{ padding: "13px 18px", border: "none", borderBottom: tab === i ? "2px solid #A32D2D" : "2px solid transparent", background: "transparent", fontSize: 13, fontWeight: tab === i ? 700 : 500, color: tab === i ? "#A32D2D" : "#6b7280", cursor: "pointer", whiteSpace: "nowrap" }}>
            {["👥","➕","📊","⚙️"][i]} {tb}
          </button>
        ))}
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "24px 5%" }}>

        {/* CLIENTS LIST */}
        {tab === 0 && (
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
              <h2 style={{ fontSize: 18, fontWeight: 900, color: "#26215C", margin: 0 }}>{lang === "es" ? "Todos mis clientes" : "All my clients"} ({clients.length})</h2>
              <button onClick={() => setTab(1)} style={{ padding: "9px 18px", borderRadius: 10, border: "none", background: "#A32D2D", color: "white", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>{t.addClient}</button>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {clients.map(client => (
                <div key={client.id} style={{ background: "white", border: "1px solid #e8e8f0", borderRadius: 14, padding: "16px 20px", display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
                  <div style={{ width: 42, height: 42, background: client.color, borderRadius: 11, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 900, color: "white", flexShrink: 0 }}>{client.name[0]}</div>
                  <div style={{ flex: 1, minWidth: 120 }}>
                    <p style={{ fontSize: 15, fontWeight: 800, color: "#26215C", margin: "0 0 2px" }}>{client.name}</p>
                    <p style={{ fontSize: 12, color: "#9ca3af", margin: 0 }}>{client.type} · {client.campaigns} {t.campaigns}</p>
                  </div>
                  <span style={{ fontSize: 11, fontWeight: 600, color: client.status === "active" ? "#16a34a" : "#9ca3af", background: client.status === "active" ? "#f0fdf4" : "#f9fafb", padding: "3px 10px", borderRadius: 20, border: `1px solid ${client.status === "active" ? "#bbf7d0" : "#e5e7eb"}` }}>
                    {client.status === "active" ? t.active : t.inactive}
                  </span>
                  <span style={{ fontSize: 13, fontWeight: 700, color: "#26215C", background: "#FFF8F5", padding: "4px 12px", borderRadius: 20 }}>{client.plan}</span>
                  <span style={{ fontSize: 16, fontWeight: 900, color: "#16a34a", minWidth: 50, textAlign: "right" }}>${client.revenue}<span style={{ fontSize: 11, fontWeight: 400, color: "#9ca3af" }}>/mo</span></span>
                  <div style={{ display: "flex", gap: 6 }}>
                    <button style={{ fontSize: 11, padding: "6px 12px", borderRadius: 8, border: "none", background: "#26215C", color: "white", cursor: "pointer", fontWeight: 600 }}>{t.viewBtn}</button>
                    <button style={{ fontSize: 11, padding: "6px 12px", borderRadius: 8, border: "1px solid #e5e7eb", background: "white", color: "#374151", cursor: "pointer", fontWeight: 600 }}>{t.reportBtn}</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ADD CLIENT */}
        {tab === 1 && (
          <div style={{ maxWidth: 580 }}>
            <h2 style={{ fontSize: 18, fontWeight: 900, color: "#26215C", margin: "0 0 20px" }}>{t.addClient}</h2>
            {saved ? (
              <div style={{ background: "#f0fdf4", border: "2px solid #bbf7d0", borderRadius: 16, padding: "32px", textAlign: "center" }}>
                <div style={{ fontSize: 48, marginBottom: 12 }}>✅</div>
                <h3 style={{ fontSize: 18, fontWeight: 800, color: "#16a34a", margin: "0 0 6px" }}>{t.clientCreated}</h3>
                <p style={{ fontSize: 14, color: "#374151", margin: 0 }}>{t.clientCreatedSub}</p>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                  {[[t.nameLabel, "name", t.namePh, "text"], [t.contactLabel, "contact", t.contactPh, "text"], [t.emailLabel, "email", t.emailPh, "email"], [t.phoneLabel, "phone", t.phonePh, "tel"]].map(([l, k, ph, type]) => (
                    <div key={k}><label style={{ fontSize: 11, fontWeight: 700, color: "#374151", display: "block", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>{l}</label>
                      <input type={type} value={form[k]} onChange={e => setForm(f => ({ ...f, [k]: e.target.value }))} placeholder={ph} style={inp} /></div>
                  ))}
                </div>
                <div><label style={{ fontSize: 11, fontWeight: 700, color: "#374151", display: "block", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.05em" }}>{t.typeLabel}</label>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {t.types.map(tp => <button key={tp} onClick={() => setForm(f => ({ ...f, type: tp }))} style={{ padding: "7px 13px", borderRadius: 9, border: form.type === tp ? "2px solid #26215C" : "1.5px solid #e5e7eb", background: form.type === tp ? "#FFF8F5" : "white", fontSize: 12, fontWeight: form.type === tp ? 700 : 400, color: form.type === tp ? "#26215C" : "#374151", cursor: "pointer" }}>{form.type === tp ? "✓ " : ""}{tp}</button>)}
                  </div></div>
                <div><label style={{ fontSize: 11, fontWeight: 700, color: "#374151", display: "block", marginBottom: 10, textTransform: "uppercase", letterSpacing: "0.05em" }}>{t.planLabel}</label>
                  <div style={{ display: "flex", gap: 10 }}>
                    {t.agencyPlans.map(p => (
                      <button key={p.name} onClick={() => setForm(f => ({ ...f, plan: p.name }))}
                        style={{ flex: 1, padding: "14px 10px", borderRadius: 12, border: form.plan === p.name ? "2px solid #26215C" : "1.5px solid #e5e7eb", background: form.plan === p.name ? "#FFF8F5" : "white", cursor: "pointer", textAlign: "center" }}>
                        <p style={{ fontSize: 20, fontWeight: 900, color: form.plan === p.name ? "#26215C" : "#374151", margin: "0 0 4px" }}>${p.price}</p>
                        <p style={{ fontSize: 12, fontWeight: 700, color: form.plan === p.name ? "#26215C" : "#374151", margin: "0 0 8px" }}>{p.name}</p>
                        {p.features.map((f, i) => <p key={i} style={{ fontSize: 11, color: "#9ca3af", margin: "0 0 2px" }}>✓ {f}</p>)}
                      </button>
                    ))}
                  </div></div>
                <div><label style={{ fontSize: 11, fontWeight: 700, color: "#374151", display: "block", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>{t.notesLabel}</label>
                  <textarea value={form.notes} onChange={e => setForm(f => ({ ...f, notes: e.target.value }))} placeholder={t.notesPh} style={{ ...inp, minHeight: 70, resize: "none" }} /></div>
                <button onClick={saveClient} disabled={!form.name.trim() || saving}
                  style={{ padding: "14px", borderRadius: 12, border: "none", background: form.name.trim() && !saving ? "#A32D2D" : "#e5e7eb", color: "white", fontSize: 15, fontWeight: 800, cursor: form.name.trim() && !saving ? "pointer" : "not-allowed" }}>
                  {saving ? (
                    <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                      <span style={{ width: 16, height: 16, border: "2px solid rgba(255,255,255,.4)", borderTopColor: "white", borderRadius: "50%", display: "inline-block", animation: "spin .7s linear infinite" }} />
                      {t.saving}
                    </span>
                  ) : t.saveClientBtn}
                </button>
              </div>
            )}
          </div>
        )}

        {/* REPORTS */}
        {tab === 2 && (
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 900, color: "#26215C", margin: "0 0 16px" }}>{t.invoicesTitle}</h2>
            <div style={{ background: "white", border: "1px solid #e8e8f0", borderRadius: 14, overflow: "hidden", marginBottom: 20 }}>
              {clients.map((c, i) => (
                <div key={c.id} style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 20px", borderBottom: i < clients.length - 1 ? "1px solid #f3f4f6" : "none" }}>
                  <div style={{ width: 36, height: 36, background: c.color, borderRadius: 9, display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 900, fontSize: 14, flexShrink: 0 }}>{c.name[0]}</div>
                  <p style={{ fontSize: 14, fontWeight: 700, color: "#26215C", margin: 0, flex: 1 }}>{c.name}</p>
                  <span style={{ fontSize: 16, fontWeight: 900, color: "#16a34a" }}>${c.revenue}</span>
                  <span style={{ fontSize: 11, fontWeight: 600, padding: "3px 10px", borderRadius: 20, background: c.status === "active" ? "#f0fdf4" : "#f9fafb", color: c.status === "active" ? "#16a34a" : "#9ca3af", border: `1px solid ${c.status === "active" ? "#bbf7d0" : "#e5e7eb"}` }}>
                    {c.status === "active" ? t.paid : t.pending}
                  </span>
                </div>
              ))}
            </div>
            <div style={{ background: "linear-gradient(135deg,#26215C,#A32D2D)", borderRadius: 14, padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <p style={{ fontSize: 15, fontWeight: 700, color: "white", margin: 0 }}>{t.totalBilled}</p>
              <p style={{ fontSize: 32, fontWeight: 900, color: "#FAEEDA", margin: 0 }}>${totalRevenue}/mo</p>
            </div>
          </div>
        )}

        {/* SETTINGS */}
        {tab === 3 && (
          <div style={{ maxWidth: 540 }}>
            <div style={{ background: "white", border: "1px solid #e8e8f0", borderRadius: 16, padding: "22px", marginBottom: 16 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                <div>
                  <p style={{ fontSize: 15, fontWeight: 800, color: "#26215C", margin: "0 0 4px" }}>{t.whitelabelTitle}</p>
                  <p style={{ fontSize: 13, color: "#9ca3af", margin: 0 }}>{t.whitelabelSub}</p>
                </div>
                <button onClick={() => setWhitelabel(!whitelabel)}
                  style={{ width: 48, height: 26, borderRadius: 13, background: whitelabel ? "#A32D2D" : "#e5e7eb", border: "none", cursor: "pointer", position: "relative", transition: "background .2s" }}>
                  <div style={{ width: 20, height: 20, borderRadius: "50%", background: "white", position: "absolute", top: 3, left: whitelabel ? 25 : 3, transition: "left .2s", boxShadow: "0 1px 4px rgba(0,0,0,.2)" }} />
                </button>
              </div>
              {whitelabel && (
                <div><label style={{ fontSize: 11, fontWeight: 700, color: "#374151", display: "block", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>{t.agencyName}</label>
                  <input value={agencyName} onChange={e => setAgencyName(e.target.value)} placeholder={t.agencyNamePh} style={inp} /></div>
              )}
            </div>
            <div style={{ background: "white", border: "1px solid #e8e8f0", borderRadius: 16, padding: "22px" }}>
              <p style={{ fontSize: 15, fontWeight: 800, color: "#26215C", margin: "0 0 6px" }}>{t.billingTitle}</p>
              <p style={{ fontSize: 13, color: "#9ca3af", margin: "0 0 16px" }}>{t.billingSub}</p>
              <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 10, padding: "12px 14px" }}>
                <p style={{ fontSize: 13, color: "#16a34a", margin: 0, fontWeight: 600 }}>✓ {lang === "es" ? "Cobro automático activado el día 1 de cada mes via Stripe" : "Automatic billing activated on day 1 of each month via Stripe"}</p>
              </div>
            </div>
          </div>
        )}
      </div>
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
    </div>
  );
}

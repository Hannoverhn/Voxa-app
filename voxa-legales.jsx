import { useState } from "react";

const T = {
  es: {
    title: "Legal",
    tabs: ["Términos y condiciones", "Política de privacidad", "Política de reembolsos", "Cookies"],
    lastUpdate: "Última actualización: julio 2026",
    company: "Voxa",
    domain: "voxa.ai",
    email: "legal@voxa.ai",
    country: "Honduras",

    // TÉRMINOS
    terms: {
      title: "Términos y Condiciones de Uso",
      intro: "Al registrarte en Voxa y usar nuestros servicios, aceptas estos términos. Léelos con calma — están escritos en lenguaje simple.",
      sections: [
        {
          title: "1. ¿Qué es Voxa?",
          content: "Voxa es una plataforma de software (SaaS) que utiliza inteligencia artificial para generar campañas publicitarias digitales. Operamos desde Honduras y servimos a usuarios en toda América Latina, Estados Unidos y España."
        },
        {
          title: "2. Tu cuenta",
          content: "Para usar Voxa necesitas crear una cuenta con información verdadera. Eres responsable de mantener tu contraseña segura y de todo lo que ocurra bajo tu cuenta. Si detectas acceso no autorizado, notifícanos de inmediato a legal@voxa.ai."
        },
        {
          title: "3. Planes y pagos",
          content: "Voxa ofrece un período de prueba gratuito de 30 días sin tarjeta de crédito. Después del período de prueba, tu cuenta se limita automáticamente — no se te cobra nada sin tu autorización. Los planes de pago se cobran mensualmente y puedes cancelar en cualquier momento. Los precios de lanzamiento se mantienen para siempre para quienes se suscriban durante el período de lanzamiento (primeros 5,000 suscriptores)."
        },
        {
          title: "4. Sistema de recargas Voxa Pauta",
          content: "Cuando depositas saldo en Voxa Pauta, Voxa cobra una comisión de gestión del 20% del monto depositado. El 80% restante se destina íntegramente a tu presupuesto publicitario en las plataformas seleccionadas (Meta, Google, TikTok). La comisión de gestión no es reembolsable una vez que la campaña haya sido lanzada."
        },
        {
          title: "5. Uso aceptable",
          content: "No puedes usar Voxa para crear anuncios fraudulentos, engañosos, ilegales o que violen las políticas de las plataformas publicitarias. No puedes revender el acceso a Voxa sin autorización escrita. Las cuentas del Plan Agencias incluyen autorización para usar Voxa en nombre de clientes."
        },
        {
          title: "6. Propiedad intelectual",
          content: "Los anuncios y contenido que generas con Voxa son tuyos. Voxa conserva los derechos sobre la plataforma, el software, los algoritmos y la tecnología. Al usar Voxa nos otorgas permiso de usar ejemplos anónimos de campañas para mejorar nuestros modelos de IA."
        },
        {
          title: "7. Limitación de responsabilidad",
          content: "Voxa proporciona la plataforma 'tal como está'. No garantizamos resultados específicos de tus campañas publicitarias — los resultados dependen de múltiples factores fuera de nuestro control. Nuestra responsabilidad máxima se limita al monto que hayas pagado en los últimos 3 meses."
        },
        {
          title: "8. Cancelación y terminación",
          content: "Puedes cancelar tu cuenta en cualquier momento desde tu panel de configuración. Voxa puede suspender o terminar cuentas que violen estos términos. Al cancelar, conservas acceso a tus datos por 30 días para que puedas descargarlos."
        },
        {
          title: "9. Cambios a estos términos",
          content: "Podemos actualizar estos términos. Te notificaremos por email con al menos 15 días de anticipación antes de que cambios importantes entren en vigor. Si continúas usando Voxa después de los cambios, aceptas los nuevos términos."
        },
        {
          title: "10. Ley aplicable",
          content: "Estos términos se rigen por las leyes de Honduras. Cualquier disputa se resolverá primero mediante negociación directa. Si no llegamos a un acuerdo, la jurisdicción será la de Tegucigalpa, Honduras."
        }
      ]
    },

    // PRIVACIDAD
    privacy: {
      title: "Política de Privacidad",
      intro: "Tu privacidad es importante para nosotros. Esta política explica qué datos recopilamos, cómo los usamos y cómo los protegemos.",
      sections: [
        {
          title: "1. Qué datos recopilamos",
          content: "Datos de cuenta: nombre, email y contraseña (encriptada). Datos de uso: campañas creadas, módulos utilizados, tiempo de sesión. Datos de pago: procesados por Stripe o PayPal — Voxa nunca almacena tu número de tarjeta. Datos del negocio: la información que ingresas para generar anuncios (nombre del negocio, descripción, audiencia)."
        },
        {
          title: "2. Cómo usamos tus datos",
          content: "Para brindarte el servicio de generación de campañas. Para mejorar nuestra IA con patrones anónimos (nunca con tu información identificable). Para enviarte reportes de tus campañas y actualizaciones del producto. Para cumplir obligaciones legales y prevenir fraude."
        },
        {
          title: "3. Compartir información",
          content: "No vendemos tu información a terceros. Compartimos datos únicamente con: proveedores de servicio necesarios (AWS para hosting, Stripe para pagos, Anthropic para IA), autoridades cuando la ley lo requiera. Los datos que ingresas para generar anuncios se envían a los modelos de IA de Anthropic para procesar tu solicitud."
        },
        {
          title: "4. Tus derechos",
          content: "Tienes derecho a: acceder a todos tus datos (desde Configuración > Mis datos), corregir información incorrecta, eliminar tu cuenta y todos tus datos, exportar tus campañas en formato CSV, oponerte al uso de tus datos para marketing. Para ejercer estos derechos escríbenos a privacidad@voxa.ai."
        },
        {
          title: "5. Seguridad",
          content: "Usamos encriptación SSL/TLS para todas las comunicaciones. Las contraseñas se almacenan con hash bcrypt. Los datos de pago los maneja Stripe, certificado PCI DSS Nivel 1. Realizamos auditorías de seguridad periódicas."
        },
        {
          title: "6. Retención de datos",
          content: "Conservamos tus datos mientras tu cuenta esté activa. Si cancelas, eliminamos tus datos personales en 90 días, excepto registros de transacciones que debemos conservar por obligaciones fiscales (7 años)."
        },
        {
          title: "7. Transferencias internacionales",
          content: "Nuestros servidores están en Estados Unidos (AWS). Al usar Voxa desde Honduras u otros países de LATAM, tus datos se transfieren a servidores en EE.UU. bajo las garantías del GDPR y leyes locales aplicables."
        },
        {
          title: "8. Menores de edad",
          content: "Voxa no está diseñado para menores de 18 años. No recopilamos intencionalmente datos de menores. Si detectamos una cuenta de un menor, la eliminaremos."
        }
      ]
    },

    // REEMBOLSOS
    refunds: {
      title: "Política de Reembolsos",
      intro: "Queremos que estés satisfecho con Voxa. Si algo no funciona como esperabas, aquí está nuestra política clara y justa.",
      sections: [
        {
          title: "Suscripciones mensuales (Plan Pro y Agencias)",
          content: "Tienes 7 días desde tu primer cobro para solicitar un reembolso completo sin preguntas. Si llevas más de 7 días pagando y tienes un problema técnico que no pudimos resolver en 72 horas, también aplicas para reembolso. No ofrecemos reembolsos por 'cambio de opinión' después de los 7 días iniciales.",
          type: "info"
        },
        {
          title: "Modo Político (add-on)",
          content: "Mismas condiciones que las suscripciones: 7 días para reembolso completo desde el primer cobro del add-on.",
          type: "info"
        },
        {
          title: "Recargas de Voxa Pauta",
          content: "Si tu campaña aún NO ha sido lanzada: reembolso completo del saldo sin gastar. Si tu campaña YA fue lanzada: reembolso del saldo no gastado en pauta. La comisión de gestión del 20% no es reembolsable una vez lanzada la campaña. Si Voxa comete un error técnico que afecta tu campaña, el reembolso es total.",
          type: "warning"
        },
        {
          title: "Creativos y diseño (pagos únicos)",
          content: "Si el trabajo aún no ha comenzado: reembolso completo. Si el trabajo está en proceso: reembolso del 50%. Si el trabajo fue entregado: no hay reembolso, pero trabajamos contigo hasta que quedes satisfecho con hasta 2 revisiones incluidas.",
          type: "info"
        },
        {
          title: "¿Cómo solicitar un reembolso?",
          content: "Escríbenos a reembolsos@voxa.ai con tu email de cuenta y el motivo. Respondemos en máximo 24 horas. Si aplica, el reembolso se procesa en 3-5 días hábiles al mismo método de pago original.",
          type: "success"
        },
        {
          title: "Lo que NUNCA hacemos",
          content: "Nunca ignoramos una solicitud de reembolso. Nunca cobramos comisiones por procesar un reembolso. Nunca cancelamos tu cuenta por pedir un reembolso.",
          type: "success"
        }
      ]
    },

    // COOKIES
    cookies: {
      title: "Política de Cookies",
      intro: "Voxa usa cookies para que la plataforma funcione correctamente y para mejorar tu experiencia.",
      sections: [
        {
          title: "¿Qué son las cookies?",
          content: "Son pequeños archivos que se guardan en tu navegador cuando visitas Voxa. Nos permiten recordar tu sesión, preferencias de idioma y configuración."
        },
        {
          title: "Cookies que usamos",
          content: "Esenciales (no se pueden desactivar): mantienen tu sesión activa, recuerdan tu idioma preferido, protegen contra ataques CSRF. De rendimiento (opcionales): miden qué funciones usas más para mejorar el producto. De marketing (opcionales): solo si aceptas, para mostrarte anuncios relevantes de Voxa en otras plataformas."
        },
        {
          title: "Cómo gestionar tus cookies",
          content: "Puedes aceptar o rechazar cookies opcionales desde el banner que aparece en tu primera visita. También puedes cambiar tus preferencias en cualquier momento desde Configuración > Privacidad > Cookies. Los navegadores también tienen opciones para bloquear cookies directamente."
        },
        {
          title: "Cookies de terceros",
          content: "Stripe (pagos), Google Analytics (si lo activas), Meta Pixel (opcional para retargeting). Cada uno tiene su propia política de privacidad que puedes consultar en sus sitios."
        }
      ]
    },

    accept: "Acepto estos términos",
    download: "Descargar PDF",
    contact: "¿Preguntas? Escríbenos a",
  },
  en: {
    title: "Legal",
    tabs: ["Terms & Conditions", "Privacy Policy", "Refund Policy", "Cookies"],
    lastUpdate: "Last updated: July 2026",
    company: "Voxa",
    domain: "voxa.ai",
    email: "legal@voxa.ai",
    country: "Honduras",
    terms: {
      title: "Terms and Conditions of Use",
      intro: "By registering on Voxa and using our services, you accept these terms. Read them carefully — they are written in plain language.",
      sections: [
        { title: "1. What is Voxa?", content: "Voxa is a software platform (SaaS) that uses artificial intelligence to generate digital advertising campaigns. We operate from Honduras and serve users across Latin America, the United States and Spain." },
        { title: "2. Your account", content: "To use Voxa you need to create an account with truthful information. You are responsible for keeping your password secure and for everything that happens under your account. If you detect unauthorized access, notify us immediately at legal@voxa.ai." },
        { title: "3. Plans and payments", content: "Voxa offers a 30-day free trial with no credit card required. After the trial period, your account is automatically limited — you are not charged without your authorization. Paid plans are billed monthly and you can cancel at any time. Launch prices are locked forever for those who subscribe during the launch period (first 5,000 subscribers)." },
        { title: "4. Voxa Pauta recharge system", content: "When you deposit balance in Voxa Pauta, Voxa charges a 20% management commission on the deposited amount. The remaining 80% goes entirely to your advertising budget on selected platforms (Meta, Google, TikTok). The management commission is non-refundable once the campaign has been launched." },
        { title: "5. Acceptable use", content: "You may not use Voxa to create fraudulent, misleading, illegal ads or ads that violate advertising platform policies. You may not resell access to Voxa without written authorization. Agency Plan accounts include authorization to use Voxa on behalf of clients." },
        { title: "6. Intellectual property", content: "The ads and content you generate with Voxa are yours. Voxa retains rights to the platform, software, algorithms and technology. By using Voxa you grant us permission to use anonymous campaign examples to improve our AI models." },
        { title: "7. Limitation of liability", content: "Voxa provides the platform 'as is'. We do not guarantee specific results from your advertising campaigns — results depend on multiple factors outside our control. Our maximum liability is limited to the amount you have paid in the last 3 months." },
        { title: "8. Cancellation and termination", content: "You can cancel your account at any time from your settings panel. Voxa may suspend or terminate accounts that violate these terms. Upon cancellation, you retain access to your data for 30 days to download it." },
        { title: "9. Changes to these terms", content: "We may update these terms. We will notify you by email at least 15 days before significant changes take effect. If you continue using Voxa after changes, you accept the new terms." },
        { title: "10. Applicable law", content: "These terms are governed by the laws of Honduras. Any dispute will be resolved first through direct negotiation. If we cannot reach an agreement, jurisdiction will be Tegucigalpa, Honduras." }
      ]
    },
    privacy: {
      title: "Privacy Policy",
      intro: "Your privacy is important to us. This policy explains what data we collect, how we use it and how we protect it.",
      sections: [
        { title: "1. What data we collect", content: "Account data: name, email and password (encrypted). Usage data: campaigns created, modules used, session time. Payment data: processed by Stripe or PayPal — Voxa never stores your card number. Business data: information you enter to generate ads (business name, description, audience)." },
        { title: "2. How we use your data", content: "To provide the campaign generation service. To improve our AI with anonymous patterns (never with your identifiable information). To send you campaign reports and product updates. To comply with legal obligations and prevent fraud." },
        { title: "3. Sharing information", content: "We do not sell your information to third parties. We share data only with: necessary service providers (AWS for hosting, Stripe for payments, Anthropic for AI), authorities when required by law. Data you enter to generate ads is sent to Anthropic's AI models to process your request." },
        { title: "4. Your rights", content: "You have the right to: access all your data (from Settings > My Data), correct incorrect information, delete your account and all your data, export your campaigns in CSV format, object to use of your data for marketing. To exercise these rights write to privacy@voxa.ai." },
        { title: "5. Security", content: "We use SSL/TLS encryption for all communications. Passwords are stored with bcrypt hashing. Payment data is handled by Stripe, certified PCI DSS Level 1. We conduct periodic security audits." },
        { title: "6. Data retention", content: "We keep your data while your account is active. If you cancel, we delete your personal data within 90 days, except transaction records we must keep for tax obligations (7 years)." },
        { title: "7. International transfers", content: "Our servers are in the United States (AWS). When using Voxa from Honduras or other LATAM countries, your data is transferred to servers in the US under GDPR guarantees and applicable local laws." },
        { title: "8. Minors", content: "Voxa is not designed for users under 18. We do not intentionally collect data from minors. If we detect a minor's account, we will delete it." }
      ]
    },
    refunds: {
      title: "Refund Policy",
      intro: "We want you to be satisfied with Voxa. If something doesn't work as expected, here is our clear and fair policy.",
      sections: [
        { title: "Monthly subscriptions (Pro and Agency Plans)", content: "You have 7 days from your first charge to request a full refund, no questions asked. If you have been paying for more than 7 days and have a technical issue we couldn't resolve within 72 hours, you also qualify for a refund. We do not offer refunds for 'change of mind' after the initial 7 days.", type: "info" },
        { title: "Political Mode (add-on)", content: "Same conditions as subscriptions: 7 days for full refund from the first charge of the add-on.", type: "info" },
        { title: "Voxa Pauta recharges", content: "If your campaign has NOT been launched yet: full refund of unspent balance. If your campaign HAS been launched: refund of unspent ad budget. The 20% management commission is non-refundable once the campaign is launched. If Voxa makes a technical error affecting your campaign, the refund is total.", type: "warning" },
        { title: "Creatives and design (one-time payments)", content: "If work hasn't started: full refund. If work is in progress: 50% refund. If work has been delivered: no refund, but we work with you until satisfied with up to 2 included revisions.", type: "info" },
        { title: "How to request a refund", content: "Write to refunds@voxa.ai with your account email and reason. We respond within 24 hours. If applicable, the refund is processed within 3-5 business days to the original payment method.", type: "success" },
        { title: "What we NEVER do", content: "We never ignore a refund request. We never charge fees to process a refund. We never cancel your account for requesting a refund.", type: "success" }
      ]
    },
    cookies: {
      title: "Cookie Policy",
      intro: "Voxa uses cookies to make the platform work correctly and to improve your experience.",
      sections: [
        { title: "What are cookies?", content: "They are small files saved in your browser when you visit Voxa. They allow us to remember your session, language preferences and settings." },
        { title: "Cookies we use", content: "Essential (cannot be disabled): keep your session active, remember your preferred language, protect against CSRF attacks. Performance (optional): measure which features you use most to improve the product. Marketing (optional): only if you accept, to show you relevant Voxa ads on other platforms." },
        { title: "How to manage your cookies", content: "You can accept or reject optional cookies from the banner that appears on your first visit. You can also change your preferences at any time from Settings > Privacy > Cookies. Browsers also have options to block cookies directly." },
        { title: "Third-party cookies", content: "Stripe (payments), Google Analytics (if enabled), Meta Pixel (optional for retargeting). Each has its own privacy policy you can consult on their sites." }
      ]
    },
    accept: "I accept these terms",
    download: "Download PDF",
    contact: "Questions? Write to us at",
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

const TYPE_STYLE = {
  info:    { bg: "#f5f3ff", border: "#ddd6fe", icon: "ℹ️" },
  warning: { bg: "#fefce8", border: "#fde68a", icon: "⚠️" },
  success: { bg: "#f0fdf4", border: "#bbf7d0", icon: "✅" },
  default: { bg: "#fafafa", border: "#e5e7eb", icon: "📄" },
};

export default function VoxaLegales() {
  const [lang, setLang] = useState("es");
  const [tab, setTab] = useState(0);
  const t = T[lang];
  const docs = [t.terms, t.privacy, t.refunds, t.cookies];
  const doc = docs[tab];
  const icons = ["📋","🔒","💰","🍪"];

  return (
    <div style={{ fontFamily: "'Inter',system-ui,sans-serif", background: "#f5f3ef", minHeight: "100vh" }}>

      {/* HEADER */}
      <div style={{ background: "#26215C", padding: "0 5%", height: 62, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
          <div style={{ width: 30, height: 30, background: "#A32D2D", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, color: "white", fontSize: 14 }}>V</div>
          <span style={{ fontWeight: 900, fontSize: 17, color: "white" }}>Voxa</span>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.5)" }}>· {t.title}</span>
        </div>
        <LangToggle lang={lang} setLang={setLang} />
      </div>

      {/* TABS */}
      <div style={{ background: "white", borderBottom: "1px solid #e8e8f0", padding: "0 5%", display: "flex", overflowX: "auto" }}>
        {t.tabs.map((tb, i) => (
          <button key={i} onClick={() => setTab(i)}
            style={{ padding: "14px 20px", border: "none", borderBottom: tab === i ? "2px solid #A32D2D" : "2px solid transparent", background: "transparent", fontSize: 13, fontWeight: tab === i ? 700 : 500, color: tab === i ? "#A32D2D" : "#6b7280", cursor: "pointer", whiteSpace: "nowrap" }}>
            {icons[i]} {tb}
          </button>
        ))}
      </div>

      {/* CONTENT */}
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "36px 5% 60px" }}>

        {/* DOC HEADER */}
        <div style={{ background: "#26215C", borderRadius: 16, padding: "28px 32px", marginBottom: 28 }}>
          <h1 style={{ fontSize: 24, fontWeight: 900, color: "white", margin: "0 0 8px", letterSpacing: "-0.02em" }}>{doc.title}</h1>
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", margin: "0 0 12px" }}>{t.lastUpdate} · {t.domain}</p>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.75)", margin: 0, lineHeight: 1.7 }}>{doc.intro}</p>
        </div>

        {/* SECTIONS */}
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {doc.sections.map((s, i) => {
            const style = TYPE_STYLE[s.type || "default"];
            return (
              <div key={i} style={{ background: style.bg, border: `1px solid ${style.border}`, borderRadius: 14, padding: "20px 24px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                  <span style={{ fontSize: 16 }}>{style.icon}</span>
                  <h3 style={{ fontSize: 15, fontWeight: 800, color: "#26215C", margin: 0 }}>{s.title}</h3>
                </div>
                <p style={{ fontSize: 14, color: "#374151", margin: 0, lineHeight: 1.75 }}>{s.content}</p>
              </div>
            );
          })}
        </div>

        {/* FOOTER */}
        <div style={{ marginTop: 32, background: "white", border: "1px solid #e8e8f0", borderRadius: 14, padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 14 }}>
          <p style={{ fontSize: 13, color: "#6b7280", margin: 0 }}>
            {t.contact} <a href={`mailto:${t.email}`} style={{ color: "#A32D2D", fontWeight: 700, textDecoration: "none" }}>{t.email}</a>
          </p>
          <div style={{ display: "flex", gap: 10 }}>
            <button onClick={() => window.print()} style={{ padding: "9px 18px", borderRadius: 9, border: "1px solid #e8e8f0", background: "white", fontSize: 13, fontWeight: 600, color: "#374151", cursor: "pointer" }}>
              {t.download}
            </button>
            <button style={{ padding: "9px 18px", borderRadius: 9, border: "none", background: "#26215C", color: "white", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>
              {t.accept}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

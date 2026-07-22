# VOXA — Guía de despliegue completa

## Tiempo estimado: 2-3 horas la primera vez

---

## PASO 1 — GitHub (15 min)

1. Ve a https://github.com y crea una cuenta (si no tienes)
2. Clic en "New repository"
3. Nombre: `voxa-app`
4. Visibilidad: **Private** (MUY importante)
5. Clic en "Create repository"
6. En tu computadora, abre la terminal:

```bash
# Instala Node.js si no lo tienes: https://nodejs.org
cd voxa-deploy
git init
git add .
git commit -m "Voxa v1.0 — lanzamiento inicial"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/voxa-app.git
git push -u origin main
```

---

## PASO 2 — Supabase (20 min)

1. Ve a https://supabase.com → "Start your project"
2. Crea una cuenta con GitHub
3. "New project" → nombre: `voxa-production`
4. Región: **South America (São Paulo)** — la más cercana a Honduras
5. Guarda la contraseña de la base de datos
6. Espera ~2 minutos a que inicie

### Configurar base de datos:
1. En Supabase: "SQL Editor" → "New query"
2. Copia y pega TODO el contenido de `supabase-schema.sql`
3. Clic en "Run" (▶️)
4. Debe decir "Schema de Voxa creado correctamente"

### Obtener credenciales:
1. "Settings" → "API"
2. Copia:
   - `Project URL` → va en `NEXT_PUBLIC_SUPABASE_URL`
   - `anon public` → va en `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `service_role` → va en `SUPABASE_SERVICE_ROLE_KEY` (¡NO lo pongas en frontend!)

### Configurar Auth:
1. "Authentication" → "Providers"
2. Activa **Email** (ya está activo por defecto)
3. Activa **Google** (para login con Google):
   - Necesitas credenciales de Google Cloud Console
   - https://console.cloud.google.com → APIs & Services → Credentials
4. "Authentication" → "Email Templates"
5. Personaliza el email de confirmación con el branding de Voxa

---

## PASO 3 — Stripe (30 min)

1. Ve a https://stripe.com → "Start now"
2. Completa el registro con datos de tu empresa
3. Verifica tu identidad (foto de cédula)

### Crear los productos:
1. "Products" → "Add product"
2. Crea estos 5 productos:

| Producto | Precio | Intervalo | ID que necesitas |
|---|---|---|---|
| Plan Pro | $19 | Mensual | STRIPE_PRICE_PRO_MONTHLY |
| Plan Pro Anual | $180 ($15/mes) | Anual | STRIPE_PRICE_PRO_ANNUAL |
| Plan Agencias | $59 | Mensual | STRIPE_PRICE_AGENCY_MONTHLY |
| Plan Agencias Anual | $564 ($47/mes) | Anual | STRIPE_PRICE_AGENCY_ANNUAL |
| Modo Político Add-on | $24 | Mensual | STRIPE_PRICE_POLITICAL_ADDON |

3. Copia el `Price ID` de cada uno (empieza con `price_`)

### Obtener credenciales:
1. "Developers" → "API keys"
2. Copia `Publishable key` (pk_live_...) y `Secret key` (sk_live_...)
3. **EMPIEZA en modo TEST** (pk_test_ / sk_test_) para probar sin cobrar real

### Configurar Webhook:
1. "Developers" → "Webhooks" → "Add endpoint"
2. URL: `https://voxa.ai/api/webhooks/stripe`
3. Eventos a escuchar:
   - `checkout.session.completed`
   - `customer.subscription.deleted`
   - `customer.subscription.updated`
   - `invoice.payment_failed`
4. Copia el `Signing secret` (whsec_...)

---

## PASO 4 — Anthropic API Key (5 min)

1. Ve a https://console.anthropic.com
2. "API Keys" → "Create Key"
3. Copia la key (sk-ant-api03-...)
4. En Billing, agrega tarjeta de crédito
5. El costo estimado por campaña generada: ~$0.03

---

## PASO 5 — Vercel (20 min)

1. Ve a https://vercel.com → "Sign up with GitHub"
2. "New Project" → Importa `voxa-app` desde GitHub
3. Framework: **Next.js** (auto-detectado)
4. Antes de hacer Deploy, ve a "Environment Variables"
5. Agrega TODAS las variables del archivo `.env.local.template`:

```
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
SUPABASE_SERVICE_ROLE_KEY=eyJ...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
STRIPE_PRICE_PRO_MONTHLY=price_...
STRIPE_PRICE_PRO_ANNUAL=price_...
STRIPE_PRICE_AGENCY_MONTHLY=price_...
STRIPE_PRICE_AGENCY_ANNUAL=price_...
STRIPE_PRICE_POLITICAL_ADDON=price_...
ANTHROPIC_API_KEY=sk-ant-api03-...
NEXT_PUBLIC_APP_URL=https://voxa.ai
```

6. Clic en "Deploy"
7. En ~3 minutos tendrás tu URL: `voxa-app.vercel.app`

---

## PASO 6 — Dominio (15 min)

### Opción A: Namecheap (recomendado, más barato)
1. Ve a https://namecheap.com
2. Busca `voxa.ai` o `voxa.co` o `voxaapp.com`
3. `voxa.co` suele estar disponible (~$15/año)
4. Compra el dominio

### Conectar dominio a Vercel:
1. En Vercel → tu proyecto → "Settings" → "Domains"
2. "Add Domain" → escribe tu dominio
3. Vercel te da los DNS records
4. En Namecheap → "Advanced DNS" → agrega los records
5. Espera 24-48h para que propague (a veces es más rápido)

---

## PASO 7 — Prueba final

1. Ve a tu URL de Vercel o dominio
2. Registra una cuenta de prueba
3. Verifica que el correo de confirmación llegó
4. Crea una campaña de prueba
5. Haz un pago de prueba con tarjeta Stripe test: `4242 4242 4242 4242`
6. Verifica que el webhook activó el plan en Supabase

---

## COSTOS MENSUALES (primeros 100 usuarios)

| Servicio | Plan | Costo |
|---|---|---|
| Vercel | Hobby (gratis hasta cierto tráfico) | $0 |
| Supabase | Free tier (hasta 500MB) | $0 |
| Namecheap | Dominio | $1.25/mes |
| Anthropic | ~100 campañas × $0.03 | $3 |
| **TOTAL** | | **~$4/mes** |

Con 10 usuarios pagando $19 = **$190/mes** cubriendo todo con margen.

---

## SOPORTE

- Vercel docs: https://vercel.com/docs
- Supabase docs: https://supabase.com/docs
- Stripe docs: https://stripe.com/docs
- Next.js docs: https://nextjs.org/docs


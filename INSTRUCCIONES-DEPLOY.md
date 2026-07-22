# VOXA — Guía de deploy completa
## De archivos a internet en 4 pasos

---

## LO QUE NECESITAS ANTES DE EMPEZAR
- Email para crear cuentas
- Tarjeta de crédito/débito (Stripe, Vercel, Supabase — todos tienen plan gratis)
- Los 33 módulos JSX de Voxa (ya los tienes)
- 2-3 horas de tiempo

---

## PASO 1 — GITHUB (repositorio del código)
### Tiempo: 15 minutos

1. Ir a https://github.com → "Sign up" → crear cuenta
2. Crear nuevo repositorio:
   - Nombre: `voxa-app`
   - Privado (seleccionar "Private")
   - Clic en "Create repository"
3. En tu computadora, instalar Git: https://git-scm.com/downloads
4. Abrir terminal y ejecutar:
   ```bash
   cd tu-carpeta-con-los-archivos
   git init
   git add .
   git commit -m "Voxa v1.0 — 33 módulos completos"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/voxa-app.git
   git push -u origin main
   ```

---

## PASO 2 — SUPABASE (base de datos + autenticación)
### Tiempo: 20 minutos

1. Ir a https://supabase.com → "Start your project"
2. "New project":
   - Organization: tu nombre o empresa
   - Name: `voxa-prod`
   - Database Password: guardar en lugar seguro
   - Region: US East (más cercano a Honduras)
3. Una vez creado, ir a Settings → API
4. Copiar y guardar:
   - `Project URL`: https://xxxxx.supabase.co
   - `anon public key`: eyJxxxx...
5. Ir a SQL Editor y ejecutar este script:

```sql
-- Tabla de usuarios
CREATE TABLE profiles (
  id UUID REFERENCES auth.users PRIMARY KEY,
  email TEXT,
  plan TEXT DEFAULT 'free',
  brain_data JSONB DEFAULT '{}',
  campaigns_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabla de campañas
CREATE TABLE campaigns (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id),
  title TEXT,
  content JSONB,
  voxa_score INTEGER,
  platform TEXT,
  status TEXT DEFAULT 'draft',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabla de códigos beta
CREATE TABLE beta_codes (
  code TEXT PRIMARY KEY,
  used BOOLEAN DEFAULT FALSE,
  used_by UUID REFERENCES profiles(id),
  used_at TIMESTAMP WITH TIME ZONE
);

-- Insertar los 100 códigos beta
INSERT INTO beta_codes (code) VALUES
  ('VOXA-BETA-001'),('VOXA-BETA-002'),('VOXA-BETA-003'),('VOXA-BETA-004'),('VOXA-BETA-005'),
  ('VOXA-BETA-006'),('VOXA-BETA-007'),('VOXA-BETA-008'),('VOXA-BETA-009'),('VOXA-BETA-010'),
  ('VOXA-BETA-011'),('VOXA-BETA-012'),('VOXA-BETA-013'),('VOXA-BETA-014'),('VOXA-BETA-015'),
  ('VOXA-BETA-016'),('VOXA-BETA-017'),('VOXA-BETA-018'),('VOXA-BETA-019'),('VOXA-BETA-020'),
  ('VOXA-BETA-021'),('VOXA-BETA-022'),('VOXA-BETA-023'),('VOXA-BETA-024'),('VOXA-BETA-025'),
  ('VOXA-BETA-026'),('VOXA-BETA-027'),('VOXA-BETA-028'),('VOXA-BETA-029'),('VOXA-BETA-030'),
  ('VOXA-BETA-031'),('VOXA-BETA-032'),('VOXA-BETA-033'),('VOXA-BETA-034'),('VOXA-BETA-035'),
  ('VOXA-BETA-036'),('VOXA-BETA-037'),('VOXA-BETA-038'),('VOXA-BETA-039'),('VOXA-BETA-040'),
  ('VOXA-BETA-041'),('VOXA-BETA-042'),('VOXA-BETA-043'),('VOXA-BETA-044'),('VOXA-BETA-045'),
  ('VOXA-BETA-046'),('VOXA-BETA-047'),('VOXA-BETA-048'),('VOXA-BETA-049'),('VOXA-BETA-050'),
  ('VOXA-BETA-051'),('VOXA-BETA-052'),('VOXA-BETA-053'),('VOXA-BETA-054'),('VOXA-BETA-055'),
  ('VOXA-BETA-056'),('VOXA-BETA-057'),('VOXA-BETA-058'),('VOXA-BETA-059'),('VOXA-BETA-060'),
  ('VOXA-BETA-061'),('VOXA-BETA-062'),('VOXA-BETA-063'),('VOXA-BETA-064'),('VOXA-BETA-065'),
  ('VOXA-BETA-066'),('VOXA-BETA-067'),('VOXA-BETA-068'),('VOXA-BETA-069'),('VOXA-BETA-070'),
  ('VOXA-BETA-071'),('VOXA-BETA-072'),('VOXA-BETA-073'),('VOXA-BETA-074'),('VOXA-BETA-075'),
  ('VOXA-BETA-076'),('VOXA-BETA-077'),('VOXA-BETA-078'),('VOXA-BETA-079'),('VOXA-BETA-080'),
  ('VOXA-BETA-081'),('VOXA-BETA-082'),('VOXA-BETA-083'),('VOXA-BETA-084'),('VOXA-BETA-085'),
  ('VOXA-BETA-086'),('VOXA-BETA-087'),('VOXA-BETA-088'),('VOXA-BETA-089'),('VOXA-BETA-090'),
  ('VOXA-BETA-091'),('VOXA-BETA-092'),('VOXA-BETA-093'),('VOXA-BETA-094'),('VOXA-BETA-095'),
  ('VOXA-BETA-096'),('VOXA-BETA-097'),('VOXA-BETA-098'),('VOXA-BETA-099'),('VOXA-BETA-100');

-- RLS (Row Level Security)
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE campaigns ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users see own profile" ON profiles FOR ALL USING (auth.uid() = id);
CREATE POLICY "Users see own campaigns" ON campaigns FOR ALL USING (auth.uid() = user_id);
```

---

## PASO 3 — STRIPE (pagos reales)
### Tiempo: 30 minutos

1. Ir a https://stripe.com → "Start now"
2. Completar verificación de cuenta (email + teléfono)
3. Ir a Dashboard → Products → "Add product"
4. Crear Plan Pro:
   - Name: `Voxa Pro`
   - Pricing: $19.00 USD / month (recurring)
   - Guardar el `Price ID`: price_xxxx
5. Crear Plan Agencias:
   - Name: `Voxa Agencias`
   - Pricing: $59.00 USD / month (recurring)
   - Guardar el `Price ID`: price_yyyy
6. Crear Modo Político (add-on):
   - Name: `Voxa Político`
   - Pricing: $24.00 USD / month (recurring)
   - Guardar el `Price ID`: price_zzzz
7. Ir a Developers → API Keys → copiar:
   - `Publishable key`: pk_live_xxxx
   - `Secret key`: sk_live_xxxx (NUNCA compartir)

---

## PASO 4 — VERCEL (hosting + dominio)
### Tiempo: 20 minutos

1. Ir a https://vercel.com → "Sign up with GitHub"
2. "New Project" → importar `voxa-app` de GitHub
3. Framework Preset: **Vite** (o Create React App)
4. En "Environment Variables" agregar:
   ```
   VITE_SUPABASE_URL=https://xxxxx.supabase.co
   VITE_SUPABASE_ANON_KEY=eyJxxxx...
   VITE_STRIPE_KEY=pk_live_xxxx
   VITE_ANTHROPIC_KEY=sk-ant-xxxx
   ```
5. Clic "Deploy" — Vercel construye y publica automáticamente
6. Tu URL inicial: `voxa-app.vercel.app`

### Conectar dominio propio:
1. Comprar dominio en https://namecheap.com:
   - `voxa.ai` (~$50/año) — premium pero perfecto
   - `voxa.hn` (~$15/año) — Honduras, más accesible
   - `voxaapp.com` (~$12/año) — alternativa económica
2. En Vercel → Settings → Domains → agregar tu dominio
3. En Namecheap → DNS → agregar los registros que Vercel indica
4. En 5-30 minutos tu dominio apunta a Voxa

---

## ESTRUCTURA DE ARCHIVOS PARA VERCEL

```
voxa-app/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── main.jsx           (punto de entrada)
│   ├── App.jsx            (router principal)
│   ├── supabase.js        (cliente Supabase)
│   ├── stripe.js          (cliente Stripe)
│   └── modules/           (tus 33 módulos)
│       ├── voxa-auth.jsx
│       ├── voxa-dashboard.jsx
│       ├── voxa-generador-bilingue.jsx
│       └── ... (todos los demás)
├── package.json
└── vite.config.js
```

---

## COSTO MENSUAL TOTAL (Plan arranque)

| Servicio | Plan | Costo |
|---|---|---|
| GitHub | Free | $0 |
| Supabase | Free (hasta 500MB) | $0 |
| Vercel | Hobby (hasta 100GB bandwidth) | $0 |
| Stripe | Por transacción | 2.9% + $0.30 |
| Anthropic API | Pay per use | ~$0.03/campaña |
| Dominio voxa.hn | Anual | $1.25/mes |
| **TOTAL** | | **~$1.25/mes + % de ventas** |

Con 100 usuarios pagando $19/mes = $1,900 MRR
Costo de infraestructura: ~$20/mes (Supabase Pro)
Margen: **$1,880/mes neto**

---

## PASOS INMEDIATOS (hacer HOY)

1. [ ] Crear cuenta GitHub
2. [ ] Crear cuenta Supabase
3. [ ] Crear cuenta Stripe
4. [ ] Crear cuenta Vercel
5. [ ] Comprar dominio voxa.hn o voxa.ai
6. [ ] Hacer el primer deploy
7. [ ] Probar el flujo completo (registro → campaña → pago)
8. [ ] Distribuir los primeros 20 códigos beta


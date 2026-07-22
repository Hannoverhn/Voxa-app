-- ══════════════════════════════════════════════════════
-- VOXA — Esquema completo de base de datos en Supabase
-- Ejecutar en: Supabase Dashboard → SQL Editor → New query
-- ══════════════════════════════════════════════════════

-- 1. TABLA PROFILES (extiende auth.users)
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email TEXT NOT NULL,
  full_name TEXT,
  business_name TEXT,
  business_type TEXT,
  location TEXT,

  -- Plan y suscripción
  plan TEXT DEFAULT 'trial' CHECK (plan IN ('trial','free','pro','agency')),
  political_addon BOOLEAN DEFAULT false,
  subscription_status TEXT DEFAULT 'trialing',
  trial_ends_at TIMESTAMPTZ DEFAULT (NOW() + INTERVAL '30 days'),
  trial_used BOOLEAN DEFAULT false,

  -- Stripe
  stripe_customer_id TEXT UNIQUE,
  stripe_subscription_id TEXT UNIQUE,

  -- Metadata
  campaigns_count INTEGER DEFAULT 0,
  avg_voxa_score NUMERIC(4,1) DEFAULT 0,
  beta_code TEXT,
  lang TEXT DEFAULT 'es',
  dark_mode BOOLEAN DEFAULT false,
  onboarding_completed BOOLEAN DEFAULT false,
  political_onboarding_completed BOOLEAN DEFAULT false,

  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. TABLA CAMPAIGNS (campañas generadas)
CREATE TABLE IF NOT EXISTS public.campaigns (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,

  -- Datos de entrada
  business_desc TEXT,
  objective TEXT,
  channel TEXT,
  sector TEXT,
  location TEXT,
  tone TEXT,
  mode TEXT DEFAULT 'standard' CHECK (mode IN ('standard','express','clone','political','autopilot')),

  -- Resultado generado
  headline_a TEXT,
  body_a TEXT,
  cta_a TEXT,
  hashtags_a TEXT[],
  headline_b TEXT,
  body_b TEXT,
  cta_b TEXT,
  headline_c TEXT,
  body_c TEXT,
  cta_c TEXT,

  -- Métricas
  voxa_score INTEGER,
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft','active','paused','completed')),
  reach INTEGER DEFAULT 0,
  clicks INTEGER DEFAULT 0,
  conversions INTEGER DEFAULT 0,
  spent NUMERIC(10,2) DEFAULT 0,

  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. TABLA BUSINESS_BRAIN
CREATE TABLE IF NOT EXISTS public.business_brain (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE UNIQUE NOT NULL,

  -- Negocio
  business_name TEXT,
  business_type TEXT,
  location TEXT,
  description TEXT,
  products TEXT,
  price_range TEXT,
  seasons TEXT,

  -- Cliente ideal
  customer_gender TEXT,
  customer_age TEXT,
  customer_income TEXT,
  customer_channels TEXT[],
  customer_pain TEXT,

  -- Marca
  brand_tone TEXT,
  brand_colors TEXT,
  brand_slogan TEXT,
  promotions TEXT,

  -- Competencia
  competitor_1 TEXT,
  competitor_2 TEXT,
  competitor_3 TEXT,
  differentiator TEXT,

  -- Objetivos
  main_goal TEXT,
  monthly_budget TEXT,
  preferred_channel TEXT,
  extra_info TEXT,

  completeness INTEGER DEFAULT 0,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. TABLA AB_TESTS
CREATE TABLE IF NOT EXISTS public.ab_tests (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  name TEXT NOT NULL,
  status TEXT DEFAULT 'running' CHECK (status IN ('running','paused','completed')),
  channel TEXT,
  audience TEXT,
  budget NUMERIC(10,2),
  duration_hours INTEGER,

  -- Versión A
  headline_a TEXT,
  body_a TEXT,
  cta_a TEXT,
  reach_a INTEGER DEFAULT 0,
  clicks_a INTEGER DEFAULT 0,
  ctr_a NUMERIC(5,2) DEFAULT 0,
  cpc_a NUMERIC(6,3) DEFAULT 0,
  score_a INTEGER DEFAULT 0,

  -- Versión B
  headline_b TEXT,
  body_b TEXT,
  cta_b TEXT,
  reach_b INTEGER DEFAULT 0,
  clicks_b INTEGER DEFAULT 0,
  ctr_b NUMERIC(5,2) DEFAULT 0,
  cpc_b NUMERIC(6,3) DEFAULT 0,
  score_b INTEGER DEFAULT 0,

  winner TEXT CHECK (winner IN ('a','b',null)),
  auto_stopped BOOLEAN DEFAULT false,
  confidence INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. TABLA BETA_CODES
CREATE TABLE IF NOT EXISTS public.beta_codes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  code TEXT UNIQUE NOT NULL,
  used BOOLEAN DEFAULT false,
  used_by UUID REFERENCES public.profiles(id),
  used_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Insertar los 100 códigos beta
INSERT INTO public.beta_codes (code) SELECT 'VOXA-BETA-' || LPAD(generate_series::TEXT, 3, '0') FROM generate_series(1, 100);

-- 6. TABLA NOTIFICATIONS
CREATE TABLE IF NOT EXISTS public.notifications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  type TEXT CHECK (type IN ('resultado','alerta','tip')),
  title TEXT NOT NULL,
  body TEXT,
  icon TEXT,
  metric_label TEXT,
  metric_value TEXT,
  metric_trend TEXT,
  read BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ══ SEGURIDAD: Row Level Security ══════════════════════

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.campaigns ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.business_brain ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ab_tests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.notifications ENABLE ROW LEVEL SECURITY;

-- Políticas: cada usuario solo ve sus propios datos
CREATE POLICY "profiles_own" ON public.profiles FOR ALL USING (auth.uid() = id);
CREATE POLICY "campaigns_own" ON public.campaigns FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "brain_own" ON public.business_brain FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "ab_own" ON public.ab_tests FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "notif_own" ON public.notifications FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "beta_read" ON public.beta_codes FOR SELECT USING (true);

-- ══ FUNCIÓN: crear perfil automáticamente al registrarse ══
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name)
  VALUES (NEW.id, NEW.email, NEW.raw_user_meta_data->>'full_name');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- ══ FUNCIÓN: actualizar contador de campañas ══
CREATE OR REPLACE FUNCTION public.update_campaign_count()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE public.profiles
  SET campaigns_count = (SELECT COUNT(*) FROM public.campaigns WHERE user_id = NEW.user_id)
  WHERE id = NEW.user_id;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER after_campaign_insert
  AFTER INSERT ON public.campaigns
  FOR EACH ROW EXECUTE FUNCTION public.update_campaign_count();

SELECT 'Schema de Voxa creado correctamente' AS resultado;

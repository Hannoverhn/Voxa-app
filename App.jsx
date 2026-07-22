import { useState, useEffect, createContext, useContext } from 'react'
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import { onAuthChange, getProfile } from './supabase'

// ── CONTEXTO GLOBAL ───────────────────────────────────────────────────────
export const VoxaContext = createContext(null)
export const useVoxa = () => useContext(VoxaContext)

// ── LAZY IMPORTS (carga cada módulo solo cuando se necesita) ──────────────
import { lazy, Suspense } from 'react'

const Landing         = lazy(() => import('./modules/voxa-landing'))
const Auth            = lazy(() => import('./modules/voxa-auth'))
const Onboarding      = lazy(() => import('./modules/voxa-onboarding'))
const Dashboard       = lazy(() => import('./modules/voxa-dashboard'))
const Generador       = lazy(() => import('./modules/voxa-generador-bilingue'))
const BusinessBrain   = lazy(() => import('./modules/voxa-business-brain'))
const Predict         = lazy(() => import('./modules/voxa-predict'))
const Autopilot       = lazy(() => import('./modules/voxa-autopilot'))
const Agentes         = lazy(() => import('./modules/voxa-agentes'))
const Intelligence    = lazy(() => import('./modules/voxa-intelligence'))
const ClonePro        = lazy(() => import('./modules/voxa-clone-pro'))
const Creativos       = lazy(() => import('./modules/voxa-creativos'))
const BrandKit        = lazy(() => import('./modules/voxa-brandkit'))
const Multiformato    = lazy(() => import('./modules/voxa-multiformato'))
const Calendario      = lazy(() => import('./modules/voxa-calendario'))
const ROI             = lazy(() => import('./modules/voxa-roi'))
const Express         = lazy(() => import('./modules/voxa-express'))
const Politico        = lazy(() => import('./modules/voxa-politico'))
const OnbPolitico     = lazy(() => import('./modules/voxa-onboarding-politico'))
const Recargas        = lazy(() => import('./modules/voxa-recargas'))
const Afiliados       = lazy(() => import('./modules/voxa-afiliados'))
const Agency          = lazy(() => import('./modules/voxa-agency'))
const Marketplace     = lazy(() => import('./modules/voxa-marketplace'))
const Growth          = lazy(() => import('./modules/voxa-growth'))
const Retencion       = lazy(() => import('./modules/voxa-retencion'))
const Progreso        = lazy(() => import('./modules/voxa-progreso'))
const ABTesting       = lazy(() => import('./modules/voxa-abtesting'))
const Notificaciones  = lazy(() => import('./modules/voxa-notificaciones'))
const Cancelacion     = lazy(() => import('./modules/voxa-cancelacion'))
const Asistente       = lazy(() => import('./modules/voxa-asistente'))
const Legales         = lazy(() => import('./modules/voxa-legales'))
const CodigosBeta     = lazy(() => import('./modules/voxa-codigos-beta'))
const Blocked         = lazy(() => import('./modules/voxa-blocked'))
const DarkMode        = lazy(() => import('./modules/voxa-darkmode'))

// ── LOADING SCREEN ────────────────────────────────────────────────────────
function VoxaLoader() {
  return (
    <div style={{
      minHeight: '100vh', background: '#26215C',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', gap: 16
    }}>
      <div style={{ width: 48, height: 48, background: '#A32D2D', borderRadius: 13, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, fontWeight: 900, color: 'white' }}>V</div>
      <div style={{ width: 32, height: 32, border: '3px solid rgba(255,255,255,0.2)', borderTopColor: '#FAEEDA', borderRadius: '50%', animation: 'spin .7s linear infinite' }} />
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
    </div>
  )
}

// ── RUTA PROTEGIDA ────────────────────────────────────────────────────────
function Protected({ children }) {
  const { user, loading } = useVoxa()
  if (loading) return <VoxaLoader />
  if (!user) return <Navigate to="/auth" replace />
  return children
}

// ── APP PRINCIPAL ─────────────────────────────────────────────────────────
function AppContent() {
  const [user, setUser] = useState(null)
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const { data: { subscription } } = onAuthChange(async (u) => {
      setUser(u)
      if (u) {
        try {
          const p = await getProfile(u.id)
          setProfile(p)
        } catch (e) {
          console.error('Error getting profile:', e)
        }
      } else {
        setProfile(null)
      }
      setLoading(false)
    })
    return () => subscription.unsubscribe()
  }, [])

  const ctx = { user, profile, setProfile, loading, darkMode, setDarkMode }

  return (
    <VoxaContext.Provider value={ctx}>
      <Suspense fallback={<VoxaLoader />}>
        <Routes>
          {/* PÚBLICAS */}
          <Route path="/"           element={<Landing />} />
          <Route path="/auth"       element={<Auth />} />
          <Route path="/precios"    element={<Landing />} />
          <Route path="/politica"   element={<Landing />} />
          <Route path="/legales"    element={<Legales />} />

          {/* PROTEGIDAS */}
          <Route path="/app" element={<Protected><Dashboard /></Protected>} />
          <Route path="/app/dashboard"      element={<Protected><Dashboard /></Protected>} />
          <Route path="/app/onboarding"     element={<Protected><Onboarding /></Protected>} />
          <Route path="/app/generar"        element={<Protected><Generador /></Protected>} />
          <Route path="/app/brain"          element={<Protected><BusinessBrain /></Protected>} />
          <Route path="/app/predict"        element={<Protected><Predict /></Protected>} />
          <Route path="/app/autopilot"      element={<Protected><Autopilot /></Protected>} />
          <Route path="/app/agentes"        element={<Protected><Agentes /></Protected>} />
          <Route path="/app/intelligence"   element={<Protected><Intelligence /></Protected>} />
          <Route path="/app/clone"          element={<Protected><ClonePro /></Protected>} />
          <Route path="/app/creativos"      element={<Protected><Creativos /></Protected>} />
          <Route path="/app/brandkit"       element={<Protected><BrandKit /></Protected>} />
          <Route path="/app/multiformato"   element={<Protected><Multiformato /></Protected>} />
          <Route path="/app/calendario"     element={<Protected><Calendario /></Protected>} />
          <Route path="/app/roi"            element={<Protected><ROI /></Protected>} />
          <Route path="/app/express"        element={<Protected><Express /></Protected>} />
          <Route path="/app/politico"       element={<Protected><Politico /></Protected>} />
          <Route path="/app/politico/setup" element={<Protected><OnbPolitico /></Protected>} />
          <Route path="/app/recargas"       element={<Protected><Recargas /></Protected>} />
          <Route path="/app/afiliados"      element={<Protected><Afiliados /></Protected>} />
          <Route path="/app/agency"         element={<Protected><Agency /></Protected>} />
          <Route path="/app/marketplace"    element={<Protected><Marketplace /></Protected>} />
          <Route path="/app/growth"         element={<Protected><Growth /></Protected>} />
          <Route path="/app/semanal"        element={<Protected><Retencion /></Protected>} />
          <Route path="/app/progreso"       element={<Protected><Progreso /></Protected>} />
          <Route path="/app/abtesting"      element={<Protected><ABTesting /></Protected>} />
          <Route path="/app/notificaciones" element={<Protected><Notificaciones /></Protected>} />
          <Route path="/app/cancelar"       element={<Protected><Cancelacion /></Protected>} />
          <Route path="/app/asistente"      element={<Protected><Asistente /></Protected>} />
          <Route path="/app/darkmode"       element={<Protected><DarkMode /></Protected>} />
          <Route path="/app/beta"           element={<Protected><CodigosBeta /></Protected>} />
          <Route path="/app/bloqueado"      element={<Blocked />} />

          {/* FALLBACK */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </VoxaContext.Provider>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

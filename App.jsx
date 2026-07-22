import { useState, useEffect, createContext, useContext, lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

export const VoxaContext = createContext(null)
export const useVoxa = () => useContext(VoxaContext)

// Lazy imports — apuntan a la raíz donde están los módulos
const Landing         = lazy(() => import('./voxa-landing'))
const Auth            = lazy(() => import('./voxa-auth'))
const Onboarding      = lazy(() => import('./voxa-onboarding'))
const Dashboard       = lazy(() => import('./voxa-dashboard'))
const Generador       = lazy(() => import('./voxa-generador-bilingue'))
const BusinessBrain   = lazy(() => import('./voxa-business-brain'))
const Predict         = lazy(() => import('./voxa-predict'))
const Autopilot       = lazy(() => import('./voxa-autopilot'))
const Agentes         = lazy(() => import('./voxa-agentes'))
const Intelligence    = lazy(() => import('./voxa-intelligence'))
const ClonePro        = lazy(() => import('./voxa-clone-pro'))
const Creativos       = lazy(() => import('./voxa-creativos'))
const BrandKit        = lazy(() => import('./voxa-brandkit'))
const Multiformato    = lazy(() => import('./voxa-multiformato'))
const Calendario      = lazy(() => import('./voxa-calendario'))
const ROI             = lazy(() => import('./voxa-roi'))
const Express         = lazy(() => import('./voxa-express'))
const Politico        = lazy(() => import('./voxa-politico'))
const OnbPolitico     = lazy(() => import('./voxa-onboarding-politico'))
const Recargas        = lazy(() => import('./voxa-recargas'))
const Afiliados       = lazy(() => import('./voxa-afiliados'))
const Agency          = lazy(() => import('./voxa-agency'))
const Marketplace     = lazy(() => import('./voxa-marketplace'))
const Growth          = lazy(() => import('./voxa-growth'))
const Retencion       = lazy(() => import('./voxa-retencion'))
const Progreso        = lazy(() => import('./voxa-progreso'))
const ABTesting       = lazy(() => import('./voxa-abtesting'))
const Notificaciones  = lazy(() => import('./voxa-notificaciones'))
const Cancelacion     = lazy(() => import('./voxa-cancelacion'))
const Asistente       = lazy(() => import('./voxa-asistente'))
const Legales         = lazy(() => import('./voxa-legales'))
const CodigosBeta     = lazy(() => import('./voxa-codigos-beta'))
const Blocked         = lazy(() => import('./voxa-blocked'))
const DarkMode        = lazy(() => import('./voxa-darkmode'))

function VoxaLoader() {
  return (
    <div style={{ minHeight:'100vh', background:'#26215C', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:16 }}>
      <div style={{ width:48, height:48, background:'#A32D2D', borderRadius:13, display:'flex', alignItems:'center', justifyContent:'center', fontSize:24, fontWeight:900, color:'white' }}>V</div>
      <div style={{ width:32, height:32, border:'3px solid rgba(255,255,255,0.2)', borderTopColor:'#FAEEDA', borderRadius:'50%', animation:'spin .7s linear infinite' }} />
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
    </div>
  )
}

function Protected({ children }) {
  // Por ahora sin auth — lo conectamos en el siguiente paso con Supabase
  return children
}

function AppContent() {
  const [user, setUser] = useState(null)
  const ctx = { user, setUser }

  return (
    <VoxaContext.Provider value={ctx}>
      <Suspense fallback={<VoxaLoader />}>
        <Routes>
          <Route path="/"                   element={<Landing />} />
          <Route path="/auth"               element={<Auth />} />
          <Route path="/legales"            element={<Legales />} />
          <Route path="/app"                element={<Protected><Dashboard /></Protected>} />
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
          <Route path="*"                   element={<Navigate to="/" replace />} />
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

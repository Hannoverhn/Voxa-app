import { useState, createContext, useContext, lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

export const VoxaContext = createContext(null)
export const useVoxa = () => useContext(VoxaContext)

const Landing         = lazy(() => import('./voxa-landing.jsx'))
const Auth            = lazy(() => import('./voxa-auth.jsx'))
const Onboarding      = lazy(() => import('./voxa-onboarding.jsx'))
const Dashboard       = lazy(() => import('./voxa-dashboard.jsx'))
const Generador       = lazy(() => import('./voxa-generador-bilingue.jsx'))
const BusinessBrain   = lazy(() => import('./voxa-business-brain.jsx'))
const Predict         = lazy(() => import('./voxa-predict.jsx'))
const Autopilot       = lazy(() => import('./voxa-autopilot.jsx'))
const Agentes         = lazy(() => import('./voxa-agentes.jsx'))
const Intelligence    = lazy(() => import('./voxa-intelligence.jsx'))
const ClonePro        = lazy(() => import('./voxa-clone-pro.jsx'))
const Creativos       = lazy(() => import('./voxa-creativos.jsx'))
const BrandKit        = lazy(() => import('./voxa-brandkit.jsx'))
const Multiformato    = lazy(() => import('./voxa-multiformato.jsx'))
const Calendario      = lazy(() => import('./voxa-calendario.jsx'))
const ROI             = lazy(() => import('./voxa-roi.jsx'))
const Express         = lazy(() => import('./voxa-express.jsx'))
const Politico        = lazy(() => import('./voxa-politico.jsx'))
const OnbPolitico     = lazy(() => import('./voxa-onboarding-politico.jsx'))
const Recargas        = lazy(() => import('./voxa-recargas.jsx'))
const Afiliados       = lazy(() => import('./voxa-afiliados.jsx'))
const Agency          = lazy(() => import('./voxa-agency.jsx'))
const Marketplace     = lazy(() => import('./voxa-marketplace.jsx'))
const Growth          = lazy(() => import('./voxa-growth.jsx'))
const Retencion       = lazy(() => import('./voxa-retencion.jsx'))
const Progreso        = lazy(() => import('./voxa-progreso.jsx'))
const ABTesting       = lazy(() => import('./voxa-abtesting.jsx'))
const Notificaciones  = lazy(() => import('./voxa-notificaciones.jsx'))
const Cancelacion     = lazy(() => import('./voxa-cancelacion.jsx'))
const Asistente       = lazy(() => import('./voxa-asistente.jsx'))
const Legales         = lazy(() => import('./voxa-legales.jsx'))
const CodigosBeta     = lazy(() => import('./voxa-codigos-beta.jsx'))
const Blocked         = lazy(() => import('./voxa-blocked.jsx'))
const DarkMode        = lazy(() => import('./voxa-darkmode.jsx'))

function VoxaLoader() {
  return (
    <div style={{ minHeight:'100vh', background:'#26215C', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:16 }}>
      <div style={{ width:48, height:48, background:'#A32D2D', borderRadius:13, display:'flex', alignItems:'center', justifyContent:'center', fontSize:24, fontWeight:900, color:'white' }}>V</div>
      <div style={{ width:32, height:32, border:'3px solid rgba(255,255,255,0.2)', borderTopColor:'#FAEEDA', borderRadius:'50%', animation:'spin .7s linear infinite' }} />
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
    </div>
  )
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
          <Route path="/app"                element={<Dashboard />} />
          <Route path="/app/dashboard"      element={<Dashboard />} />
          <Route path="/app/onboarding"     element={<Onboarding />} />
          <Route path="/app/generar"        element={<Generador />} />
          <Route path="/app/brain"          element={<BusinessBrain />} />
          <Route path="/app/predict"        element={<Predict />} />
          <Route path="/app/autopilot"      element={<Autopilot />} />
          <Route path="/app/agentes"        element={<Agentes />} />
          <Route path="/app/intelligence"   element={<Intelligence />} />
          <Route path="/app/clone"          element={<ClonePro />} />
          <Route path="/app/creativos"      element={<Creativos />} />
          <Route path="/app/brandkit"       element={<BrandKit />} />
          <Route path="/app/multiformato"   element={<Multiformato />} />
          <Route path="/app/calendario"     element={<Calendario />} />
          <Route path="/app/roi"            element={<ROI />} />
          <Route path="/app/express"        element={<Express />} />
          <Route path="/app/politico"       element={<Politico />} />
          <Route path="/app/politico/setup" element={<OnbPolitico />} />
          <Route path="/app/recargas"       element={<Recargas />} />
          <Route path="/app/afiliados"      element={<Afiliados />} />
          <Route path="/app/agency"         element={<Agency />} />
          <Route path="/app/marketplace"    element={<Marketplace />} />
          <Route path="/app/growth"         element={<Growth />} />
          <Route path="/app/semanal"        element={<Retencion />} />
          <Route path="/app/progreso"       element={<Progreso />} />
          <Route path="/app/abtesting"      element={<ABTesting />} />
          <Route path="/app/notificaciones" element={<Notificaciones />} />
          <Route path="/app/cancelar"       element={<Cancelacion />} />
          <Route path="/app/asistente"      element={<Asistente />} />
          <Route path="/app/darkmode"       element={<DarkMode />} />
          <Route path="/app/beta"           element={<CodigosBeta />} />
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

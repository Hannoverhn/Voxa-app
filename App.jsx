import { useState, createContext, useContext, lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

export const VoxaContext = createContext(null)
export const useVoxa = () => useContext(VoxaContext)

const Auth           = lazy(() => import('./voxa-auth.jsx'))
const Dashboard      = lazy(() => import('./voxa-dashboard.jsx'))
const Generador      = lazy(() => import('./voxa-generador-bilingue.jsx'))
const BusinessBrain  = lazy(() => import('./voxa-business-brain.jsx'))
const Predict        = lazy(() => import('./voxa-predict.jsx'))
const Autopilot      = lazy(() => import('./voxa-autopilot.jsx'))
const Agentes        = lazy(() => import('./voxa-agentes.jsx'))
const Legales        = lazy(() => import('./voxa-legales.jsx'))
const Blocked        = lazy(() => import('./voxa-blocked.jsx'))

function VoxaLoader() {
  return (
    <div style={{minHeight:'100vh',background:'#26215C',display:'flex',alignItems:'center',justifyContent:'center'}}>
      <div style={{width:48,height:48,background:'#A32D2D',borderRadius:13,display:'flex',alignItems:'center',justifyContent:'center',fontSize:24,fontWeight:900,color:'white'}}>V</div>
    </div>
  )
}

export default function App() {
  const [user, setUser] = useState(null)
  return (
    <VoxaContext.Provider value={{user,setUser}}>
      <BrowserRouter>
        <Suspense fallback={<VoxaLoader />}>
          <Routes>
            <Route path="/"              element={<Dashboard />} />
            <Route path="/auth"          element={<Auth />} />
            <Route path="/legales"       element={<Legales />} />
            <Route path="/app/*"         element={<Dashboard />} />
            <Route path="/app/generar"   element={<Generador />} />
            <Route path="/app/brain"     element={<BusinessBrain />} />
            <Route path="/app/predict"   element={<Predict />} />
            <Route path="/app/autopilot" element={<Autopilot />} />
            <Route path="/app/agentes"   element={<Agentes />} />
            <Route path="*"              element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </VoxaContext.Provider>
  )
}

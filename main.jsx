import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// Reset CSS global
const style = document.createElement('style')
style.textContent = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { font-family: 'Segoe UI', system-ui, -apple-system, sans-serif; -webkit-font-smoothing: antialiased; }
  :root {
    --tinta: #26215C;
    --coral: #A32D2D;
    --arena: #FAEEDA;
    --hueso: #F5F3EF;
  }
`
document.head.appendChild(style)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

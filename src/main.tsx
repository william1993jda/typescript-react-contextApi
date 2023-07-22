import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Suspense fallback={<p>Carregando...</p>}>
      <div className="container">
        <App />
      </div>
    </Suspense>
    
  </React.StrictMode>,
)

import React from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import './index.css'
import SitePage from './routes/SitePage.jsx'
import GalleryPage from './routes/GalleryPage.jsx'
import ShotPage from './routes/ShotPage.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<SitePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/shot/:id" element={<ShotPage />} />
      </Routes>
    </HashRouter>
    <Analytics />
  </React.StrictMode>
)

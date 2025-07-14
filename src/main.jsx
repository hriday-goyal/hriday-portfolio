import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Portfolio from './App'
import BlogPost from './BlogPost'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Portfolio />} />
        <Route path='/blog/:slug' element={<BlogPost />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

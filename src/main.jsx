import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from '../src/components/Header'
import HomePage from '../src/components/HomePage'
import './normalize.css'
import './index.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header></Header>
  </React.StrictMode>,
)

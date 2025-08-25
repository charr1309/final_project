import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import './TopNav.css'
import './MainNav.css'
import './Login.css'
import TopNav from './TopNav'
import MainNav from './MainNav'
import Login from './Login'
import { routes } from './views/Index'
import './TopNav.css'
import './MainNav.css'
import './Login.css'

function App() {
  return (
    <Router>
      <div className="container">
        <div>
          <TopNav />
        </div>
        <div>
          <Login />
        </div>
        <div style={{ textAlign: 'center', margin: '20px 0' }}>
          <h1 style={{ color: '#333', fontSize: '2.5em', margin: '10px 0' }}>Mr. Postcard</h1>
          <p style={{ color: '#666', fontSize: '1.2em' }}>Professional Postcard Services Since 1996</p>
        </div>
        <div>
          <MainNav />
        </div>
        <div style={{ padding: '20px' }}>
          <Routes>
            {routes.map((route, index) => (
              <Route 
                key={index}
                path={route.path} 
                element={<route.Component />} 
              />
            ))}
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
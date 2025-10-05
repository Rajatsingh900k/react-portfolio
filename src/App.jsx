import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import About from './components/About'
import LandingPage from './pages/LandingPage'
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
      </Routes>
    </>
  )
}

export default App
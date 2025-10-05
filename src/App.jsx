import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Footer from './components/Footer'
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
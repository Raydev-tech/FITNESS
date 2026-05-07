import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Hero } from './pages/Hero'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'

const App = () => {
  return (
    <>
     <BrowserRouter>
       <Navbar />
       <Routes>
        <Route path='/' element={<Hero />} />
       </Routes>
       <Footer />
     </BrowserRouter>
    </>
  )
}

export default App
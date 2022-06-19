import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Contacts } from './pages/Contacts'
import { Home } from './pages/Home.js'
import { Shop } from './pages/Shop'


export const StoreApp = () => {
  return (
    <>
    <Router>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
      <Footer />
    </Router> 
    </>
  )
}


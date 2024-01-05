import React from 'react'
import { Route , Routes } from 'react-router-dom'
import Profile from './Profile'
import Checkout from './Checkout'
import Contact from './Contact'
import Cart from './Cart'

import Footer from 'Components/Footer'
import TopNav from 'Components/Header/TopNav'

export default function Dashboard() {
  return (
    <>
      <TopNav />
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  )
}

import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Products from './Products'
import Header from 'Components/Header'
import Footer from 'Components/Footer'
import Categories from './Categories'
import ProductDetails from './ProductDetails'

export default function Frontentd() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Products />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/details" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </>
  )
}

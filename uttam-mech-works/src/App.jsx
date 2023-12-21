import React, { useState, useEffect } from 'react';
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Navbar></Navbar>
      <Routes>
      <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/products" element={<ProductList/>} />
      </Routes>
      
      <Footer></Footer>
    </Router>
      
      
    </>
  )
}

export default App

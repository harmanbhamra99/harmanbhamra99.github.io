import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/products" element={<Products/>} />
      </Routes>
      
      <Footer></Footer>
    </Router>
      
      
    </>
  )
}

export default App

import './App.css'
import About from './pages/About'
import { motion as m, AnimatePresence } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  const location = useLocation()
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </AnimatePresence>
  )
}

export default App

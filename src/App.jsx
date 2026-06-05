import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Preloader from './components/Preloader'
import TransitionPanel from './components/TransitionPanel'
import Hero from './pages/Hero'
import Works from './pages/Works'
import Info from './pages/Info'
import './App.css'

function App() {
  const [showPreloader, setShowPreloader] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPreloader(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {showPreloader && <Preloader />}
      <TransitionPanel />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/works" element={<Works />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </>
  )
}

export default App

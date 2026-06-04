import { useState, useEffect } from 'react'
import Preloader from './components/Preloader'
import TransitionPanel from './components/TransitionPanel'
import Hero from './pages/Hero'
import Works from './pages/Works'
import Info from './pages/Info'
import './App.css'

function App() {
  const [showPreloader, setShowPreloader] = useState(false)
  const [currentPage, setCurrentPage] = useState('home')

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPreloader(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  const renderPage = () => {
    switch (currentPage) {
      case 'works':
        return <Works onNavigate={setCurrentPage} />
      case 'info':
        return <Info onNavigate={setCurrentPage} />
      case 'home':
      default:
        return <Hero onNavigate={setCurrentPage} />
    }
  }

  return (
    <>
      {showPreloader && <Preloader />}
      <TransitionPanel />
      {renderPage()}
    </>
  )
}

export default App

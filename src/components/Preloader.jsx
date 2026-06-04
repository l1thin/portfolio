import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './Preloader.css'

export default function Preloader() {
  const [isAnimating, setIsAnimating] = useState(true)
  const name = 'Lithin Jose'

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    exit: {
      y: '-100vh',
      opacity: 0,
      transition: { duration: 0.8, ease: 'easeInOut' },
    },
  }

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false)
    }, 2500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <motion.div
      id="name-layer"
      className="preloader"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="preloader-content">
        <motion.div className="name-display">
          {name.split('').map((char, idx) => (
            <motion.span key={idx} variants={letterVariants}>
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
          <motion.span className="period" variants={letterVariants}>
            .
          </motion.span>
        </motion.div>
      </div>
    </motion.div>
  )
}

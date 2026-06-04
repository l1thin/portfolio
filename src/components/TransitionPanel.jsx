import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './TransitionPanel.css'

export default function TransitionPanel() {
  const [trigger, setTrigger] = useState(false)

  const panelVariants = {
    initial: { y: '100%' },
    animate: { y: '0%', transition: { duration: 0.6, ease: 'easeInOut' } },
    exit: { y: '-100%', transition: { duration: 0.6, ease: 'easeInOut' } },
  }

  return (
    <motion.div
      id="transition-panel"
      className="transition-panel"
      variants={panelVariants}
      initial="initial"
      animate={trigger ? 'animate' : 'initial'}
    >
      <div className="transition-dark"></div>
      <div className="transition-accent"></div>
    </motion.div>
  )
}

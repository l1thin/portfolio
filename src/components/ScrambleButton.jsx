import { useState } from 'react'
import { useScrambleText } from '../hooks/useScrambleText'
import './ScrambleButton.css'

export default function ScrambleButton({ onClick, children, ...props }) {
  const [isHovering, setIsHovering] = useState(false)
  const { scrambledText, scramble } = useScrambleText()
  const displayText = scrambledText || children

  const handleMouseEnter = () => {
    setIsHovering(true)
    scramble(String(children), 300)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
  }

  return (
    <button
      onClick={onClick}
      className="scramble-button chr-hover"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {displayText}
    </button>
  )
}

import { useState } from 'react'
import { useScrambleText } from '../hooks/useScrambleText'
import './ScrambleLink.css'

export default function ScrambleLink({ href, children, ...props }) {
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
    <a
      href={href}
      className="scramble-link chr-hover"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {displayText}
    </a>
  )
}

import { useState, useCallback } from 'react'

const SCRAMBLE_CHARS = '@%#$&*()[]{}?!<>+=~/^|'

export function useScrambleText() {
  const [scrambledText, setScrambledText] = useState(null)

  const scramble = useCallback((text, duration = 300) => {
    setScrambledText(text)
    const startTime = Date.now()
    
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime
      const progress = elapsed / duration

      if (progress >= 1) {
        setScrambledText(text)
        clearInterval(interval)
      } else {
        const scrambled = text
          .split('')
          .map((char) => {
            if (char === ' ') return ' '
            return Math.random() > progress * 0.7
              ? SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)]
              : char
          })
          .join('')
        setScrambledText(scrambled)
      }
    }, 30)
  }, [])

  return { scrambledText, scramble }
}

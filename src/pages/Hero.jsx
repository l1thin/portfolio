import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useScrambleText } from '../hooks/useScrambleText'
import ScrambleLink from '../components/ScrambleLink'
import ScrambleButton from '../components/ScrambleButton'
import './Hero.css'

export default function Hero() {
  const navigate = useNavigate()
  const [videoSrcMp4, setVideoSrcMp4] = useState('')
  const [videoSrcWebm, setVideoSrcWebm] = useState('')
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const videoRef = useRef(null)

  useEffect(() => {
    // Lazy load the video sources after the page has finished mounting
    const timer = setTimeout(() => {
      setVideoSrcWebm('/bg_video_optimized.webm')
      setVideoSrcMp4('/bg_video_optimized.mp4')
    }, 150)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (videoRef.current && (videoSrcWebm || videoSrcMp4)) {
      videoRef.current.load()
    }
  }, [videoSrcWebm, videoSrcMp4])

  const portfolioData = {
    firstName: 'Lithin',
    lastName: 'Jose',
    tagline: 'Quiet creator, crafting intelligent systems through motion, detail and precision.',
    subtitle: 'AI Engineer & Machine Learning Developer',
    social: {
      github: 'https://github.com/l1thin',
      linkedin: 'https://www.linkedin.com/in/lithin-jose/',
      instagram: 'https://www.instagram.com/l1thin/',
    },
    version: 'v1.0',
  }

  const socialLinks = [
    { name: 'GitHub', url: portfolioData.social.github },
    { name: 'LinkedIn', url: portfolioData.social.linkedin },
    { name: 'Instagram', url: portfolioData.social.instagram },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section id="hero" className="hero">
      <div className="hero-video-bg">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster="/video_poster.jpg"
          className={`hero-video ${isVideoPlaying ? 'is-playing' : ''}`}
          onPlaying={() => setIsVideoPlaying(true)}
        >
          {videoSrcWebm && <source src={videoSrcWebm} type="video/webm" />}
          {videoSrcMp4 && <source src={videoSrcMp4} type="video/mp4" />}
        </video>
      </div>

      <div className="hero-content">
        {/* Top Tagline */}
        <motion.div
          className="hero-top-tagline"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <span className="tagline-text">{portfolioData.tagline}</span>
        </motion.div>

        {/* Main Name Section */}
        <motion.div
          className="hero-name-section"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-name" variants={itemVariants}>
            <span className="first-name">{portfolioData.firstName}</span>
            <span className="last-name">{portfolioData.lastName}.</span>
          </motion.div>
        </motion.div>

        {/* Bottom Navigation Bar */}
        <motion.div
          className="hero-bar"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="hero-bar-left">
            <span>{portfolioData.version}</span>
          </div>

          <div className="hero-bar-center">
            {socialLinks.map((link, idx) => (
              <span key={idx}>
                <ScrambleLink href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.name}
                </ScrambleLink>
                {idx < socialLinks.length - 1 && <span className="separator"> / </span>}
              </span>
            ))}
          </div>

          <div className="hero-bar-right">
            <ScrambleButton onClick={() => navigate('/works')}>Work</ScrambleButton>
            <span className="separator"> / </span>
            <ScrambleButton onClick={() => navigate('/info')}>Info</ScrambleButton>
            <span className="separator"> / </span>
            <ScrambleLink href="mailto:lithinjosepulikkottil@gmail.com">Contact</ScrambleLink>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

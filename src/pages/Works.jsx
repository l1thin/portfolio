import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import ScrambleLink from '../components/ScrambleLink'
import './Works.css'

export default function Works() {
  const navigate = useNavigate()
  const projects = [
    {
      id: 1,
      name: 'Stratum',
      description: 'AI-powered image-to-PSD converter that transforms raster or AI-generated images into fully editable layered Photoshop files by detecting and separating backgrounds, text, objects, and visual elements using computer vision and deep learning.',
      techStack: ['React 19', 'Vite', 'Axios', 'FastAPI', 'OpenCV', 'Pillow', 'rembg', 'PyTesseract', 'EasyOCR', 'PyTorch', 'psd-tools'],
      image: '/stratum.png',
      liveLink: 'https://l1thin-stratum.hf.space/',
      sourceLink: 'https://github.com/l1thin/stratum.git',
    },
    {
      id: 2,
      name: 'InsightX',
      description: 'Multimodal conversation intelligence API that analyzes customer calls and transcripts to generate structured enterprise insights including sentiment tracking, intent detection, compliance evaluation, and configurable risk scoring.',
      techStack: ['Python', 'FastAPI', 'Uvicorn', 'Pydantic', 'Google GenAI', 'ElevenLabs', 'React 19', 'Vite', 'Tailwind CSS v4', 'Framer Motion', 'React Router DOM', 'Axios'],
      image: '/insightx.png',
      liveLink: 'https://insight.abhijith-project.me/',
      sourceLink: 'https://github.com/AbhijithPM507/insightx-conversation-intelligence.git',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="works" className="works">
      <div className="works-header">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Works
        </motion.h1>
      </div>

      <motion.div
        className="projects-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="project-card"
            variants={itemVariants}
          >
            <div className="project-image-wrapper">
              <img
                src={project.image}
                alt={project.name}
                className="project-image"
              />
              <div className="project-overlay">
                <div className="project-links">
                  <ScrambleLink
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link live-link"
                  >
                    Live Demo
                  </ScrambleLink>
                  <span className="link-divider">/</span>
                  <ScrambleLink
                    href={project.sourceLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link source-link"
                  >
                    Source Code
                  </ScrambleLink>
                </div>
              </div>
            </div>

            <div className="project-content">
              <h2 className="project-title">{project.name}</h2>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.techStack.map((tech, idx) => (
                  <span key={idx} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="back-nav"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <button onClick={() => navigate('/')} className="back-button">← Back to Home</button>
      </motion.div>
    </section>
  )
}

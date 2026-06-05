import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import ScrambleLink from '../components/ScrambleLink'
import './Info.css'

export default function Info() {
  const navigate = useNavigate()
  const profileData = {
    name: 'Lithin Jose',
    role: 'Machine Learning Engineer',
    location: 'Thrissur',
    bio: 'I am an AI & Data Science student passionate about building intelligent systems that solve real-world problems. My interests lie in Machine Learning, Artificial Intelligence, Data Analytics, and Software Engineering. I enjoy transforming ideas into practical applications, from developing AI-powered solutions and predictive models to deploying scalable web applications.',
    portrait: '/gemini-2.5-flash-image_A_cinematic_highly_professional_studio_headshot_portrait_of_a_tech_engineer_dark-0.jpg',
  }

  const skills = {
    languages: ['Python', 'R', 'SQL', 'JavaScript', 'HTML', 'CSS'],
    frameworks: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy', 'OpenCV', 'Streamlit', 'Flask', 'React', 'Next.js'],
    tools: ['Git', 'GitHub', 'Docker', 'Hugging Face', 'Jupyter Notebook', 'VS Code', 'Linux', 'Firebase', 'MongoDB', 'MySQL'],
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="info" className="info">
      <div className="info-container">
        {/* Header */}
        <motion.div
          className="info-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>About Me</h1>
        </motion.div>

        {/* Profile Section */}
        <motion.div
          className="profile-section"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="profile-image-wrapper" variants={itemVariants}>
            <img
              src={profileData.portrait}
              alt={profileData.name}
              className="profile-image"
            />
          </motion.div>

          <motion.div className="profile-info" variants={itemVariants}>
            <h2>{profileData.name}</h2>
            <p className="role">{profileData.role}</p>
            <p className="location">{profileData.location}</p>
            <p className="bio">{profileData.bio}</p>
          </motion.div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          className="skills-section"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h3 variants={itemVariants}>Skills & Expertise</motion.h3>

          {/* Languages */}
          <motion.div className="skill-category" variants={itemVariants}>
            <h4>Languages</h4>
            <div className="skill-items">
              {skills.languages.map((skill, idx) => (
                <span key={idx} className="skill-item">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Frameworks & Libraries */}
          <motion.div className="skill-category" variants={itemVariants}>
            <h4>Frameworks & Libraries</h4>
            <div className="skill-items">
              {skills.frameworks.map((skill, idx) => (
                <span key={idx} className="skill-item">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Tools & Platforms */}
          <motion.div className="skill-category" variants={itemVariants}>
            <h4>Tools & Platforms</h4>
            <div className="skill-items">
              {skills.tools.map((skill, idx) => (
                <span key={idx} className="skill-item">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          className="education-section"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h3 variants={itemVariants}>Education</motion.h3>
          <motion.div className="education-card" variants={itemVariants}>
            <h4>Artificial Intelligence And Data Science</h4>
            <p className="institution">MITS Kochi</p>
            <p className="description">
              Specialized in AI & ML, passionate about Machine Learning Projects
            </p>
          </motion.div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          className="contact-section"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h3 variants={itemVariants}>Get In Touch</motion.h3>
          <motion.div className="contact-links" variants={itemVariants}>
            <div className="contact-item">
              <span className="label">Email:</span>
              <ScrambleLink href="mailto:lithinjosepulikkottil@gmail.com">
                lithinjosepulikkottil@gmail.com
              </ScrambleLink>
            </div>
            <div className="contact-item">
              <span className="label">GitHub:</span>
              <ScrambleLink
                href="https://github.com/l1thin"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/l1thin
              </ScrambleLink>
            </div>
            <div className="contact-item">
              <span className="label">LinkedIn:</span>
              <ScrambleLink
                href="https://www.linkedin.com/in/lithin-jose/"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/lithin-jose
              </ScrambleLink>
            </div>
            <div className="contact-item">
              <span className="label">Instagram:</span>
              <ScrambleLink
                href="https://www.instagram.com/l1thin/"
                target="_blank"
                rel="noopener noreferrer"
              >
                @l1thin
              </ScrambleLink>
            </div>
          </motion.div>
        </motion.div>

        {/* Back Navigation */}
        <motion.div
          className="back-nav"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <button onClick={() => navigate('/')} className="back-button">← Back to Home</button>
        </motion.div>
      </div>
    </section>
  )
}

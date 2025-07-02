"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Github, Calendar, Users, Timer, BarChart3, Bot, Radio } from "lucide-react"

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
    {
      title: "CryptoBasicGuide",
      description:
        "A comprehensive guide for cryptocurrency beginners with interactive tutorials and real-time market data.",
      image: "https://i.ibb.co/NgfFvyxk/Chat-GPT-Image-Jul-3-2025-12-19-50-AM.png",
      technologies: ["React", "Node.js", "API Integration", "Chart.js"],
      icon: BarChart3,
      color: "from-yellow-400 to-orange-500",
      demoLink: "https://cryptobasicguide.blogspot.com",
      showGithub: false,
    },
    {
      title: "Smart AI Translator",
      description:
        "An intelligent translation tool powered by AI that supports multiple languages with context awareness.",
      image: "https://i.ibb.co/cKBH5WSb/Chat-GPT-Image-Jul-3-2025-12-25-59-AM.png",
      technologies: ["Python", "AI/ML", "Flask", "Natural Language Processing"],
      icon: Bot,
      color: "from-blue-400 to-purple-500",
      demoLink: "https://smartaitranslator.blogspot.com",
      showGithub: false,
    },
    {
      title: "Rab_Da_Radio",
      description: "A modern, feature-rich web application to stream radio stations from around the globe.",
      image: "https://i.ibb.co/n8RLj12H/Chat-GPT-Image-Jul-3-2025-12-23-59-AM.png",
      technologies: ["JavaScript", "CSS", "HTML"],
      icon: Radio,
      color: "from-green-400 to-blue-500",
      githubLink: "https://github.com/sourcecodeRTX/Rab_Da_Radio",
      demoLink: "https://sourcecodertx.github.io/Rab_Da_Radio/",
      showGithub: true,
    },
    {
      title: "Spotify Playlist to MP3 Mapper",
      description: "Tool to map Spotify playlists and convert them to downloadable MP3 format with metadata.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Node.js", "Spotify API", "FFmpeg", "Express"],
      icon: Users,
      color: "from-green-400 to-teal-500",
      showGithub: true,
      inDevelopment: true,
    },
    {
      title: "Study Timer + Quotes",
      description: "Productivity app with Pomodoro timer, motivational quotes, and study session tracking.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "Local Storage", "PWA", "Notifications API"],
      icon: Timer,
      color: "from-purple-400 to-pink-500",
      showGithub: true,
      inDevelopment: true,
    },
    {
      title: "Attendance Tracker (n8n)",
      description: "Automated attendance tracking system built with n8n workflows and database integration.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["n8n", "Webhook", "Database", "Automation"],
      icon: Calendar,
      color: "from-red-400 to-orange-500",
      showGithub: true,
      inDevelopment: true,
    },
  ]

  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-green-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-green-400 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills in various technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative bg-gray-800/50 rounded-xl overflow-hidden border border-green-500/20 hover:border-green-500/50 transition-all duration-300"
              whileHover={{ y: -10 }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity`}
                />
                <div className="absolute top-4 right-4">
                  <div className={`p-2 rounded-full bg-gradient-to-br ${project.color}`}>
                    <project.icon className="text-white" size={20} />
                  </div>
                </div>
                {project.inDevelopment && (
                  <div className="absolute top-4 left-4">
                    <span className="px-2 py-1 bg-orange-500/90 text-white text-xs rounded-full font-semibold">
                      In Development
                    </span>
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-700/50 text-green-400 rounded text-xs border border-green-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.showGithub && (
                    <motion.a
                      href={project.githubLink || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-green-500/20 text-green-400 rounded-lg hover:bg-green-500/30 transition-colors text-sm"
                    >
                      <Github size={16} />
                      Code
                    </motion.a>
                  )}
                  {project.demoLink && (
                    <motion.a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-colors text-sm"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </motion.a>
                  )}
                </div>
              </div>

              <motion.div
                className="absolute inset-0 border-2 border-green-400 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                initial={false}
                animate={{
                  boxShadow: isInView ? "0 0 20px rgba(34, 197, 94, 0.3)" : "none",
                }}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-6">
            Want to see more of my work? Check out my GitHub profile for additional projects and contributions.
          </p>
          <motion.a
            href="https://github.com/sourcecodeRTX?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(34, 197, 94, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-500 hover:bg-green-600 text-white py-3 rounded-full font-semibold flex gap-2 transition-all flex-row items-center mx-96 my-px px-20"
          >
            <Github size={20} />
            View All Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

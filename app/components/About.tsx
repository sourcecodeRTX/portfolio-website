"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code, BookOpen, Users, Coffee } from "lucide-react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stats = [
    { icon: Code, label: "Projects Completed", value: "5+" },
    { icon: BookOpen, label: "Blog Posts", value: "25+" },
    { icon: Users, label: "Happy Clients", value: "2+" },
    { icon: Coffee, label: "Cups of Coffee", value: "∞" },
  ]

  return (
    <section id="about" className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-green-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-green-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-green-400 to-blue-500 rounded-full p-1">
                <div className="w-full h-full bg-gray-900 rounded-full flex items-center justify-center">
                  <div className="text-6xl">👨‍💻</div>
                </div>
              </div>
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-green-400 rounded-full flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Code className="text-gray-900" size={32} />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-green-400">Hello! I'm Ratty Ram</h3>
            <p className="text-gray-300 leading-relaxed">
              I'm a passionate student and technology enthusiast with a love for coding and blogging. My journey in tech
              started with curiosity and has evolved into a deep passion for creating innovative solutions and sharing
              knowledge with the community.
            </p>
            <p className="text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me writing blog posts about the latest tech trends, exploring new
              programming languages, or working on exciting projects that challenge my skills and creativity.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I believe in continuous learning and am always excited to take on new challenges that push the boundaries
              of what's possible in technology.
            </p>

            <motion.div
              className="grid grid-cols-2 gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="bg-gray-800/50 p-4 rounded-lg border border-green-500/20 text-center"
                  whileHover={{ scale: 1.05, borderColor: "rgba(34, 197, 94, 0.5)" }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                >
                  <stat.icon className="text-green-400 mx-auto mb-2" size={24} />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

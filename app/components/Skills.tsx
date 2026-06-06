"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "HTML", level: 90, color: "from-orange-400 to-orange-600" },
        { name: "CSS", level: 85, color: "from-blue-400 to-blue-600" },
        { name: "JavaScript", level: 80, color: "from-yellow-400 to-yellow-600" },
        { name: "C++", level: 75, color: "from-purple-400 to-purple-600" },
        { name: "Java", level: 70, color: "from-red-400 to-red-600" },
      ],
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "React", level: 30, color: "from-cyan-400 to-cyan-600" },
        { name: "Next.js", level: 25, color: "from-gray-400 to-gray-600" },
        { name: "Node.js", level: 10, color: "from-green-400 to-green-600" },
        { name: "Git", level: 65, color: "from-orange-400 to-orange-600" },
        { name: "MongoDB", level: 10, color: "from-green-400 to-green-600" },
      ],
    },
    {
      title: "Design & Content",
      skills: [
        { name: "Canva", level: 90, color: "from-purple-400 to-purple-600" },
        { name: "Blogger", level: 95, color: "from-orange-400 to-orange-600" },
        { name: "SEO", level: 80, color: "from-blue-400 to-blue-600" },
        { name: "Content Writing", level: 85, color: "from-pink-400 to-pink-600" },
        { name: "UI/UX Design", level: 75, color: "from-indigo-400 to-indigo-600" },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-gray-800/30 relative z-10">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-green-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-green-400 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="bg-gray-800/50 p-6 rounded-xl border border-green-500/20"
            >
              <h3 className="text-xl font-bold text-green-400 mb-6 text-center">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: categoryIndex * 0.2 + skillIndex * 0.1,
                    }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-green-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5,
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
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
            Always learning and exploring new technologies to stay current with industry trends
          </p>
          <motion.div
            className="flex flex-wrap justify-center gap-3"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {["TypeScript", "Python", "Docker", "AWS", "GraphQL", "Tailwind CSS"].map((tech, index) => (
              <motion.span
                key={tech}
                className="px-4 py-2 bg-gray-700/50 text-green-400 rounded-full text-sm border border-green-500/30"
                whileHover={{ scale: 1.05, borderColor: "rgba(34, 197, 94, 0.8)" }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 1 + index * 0.1 }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

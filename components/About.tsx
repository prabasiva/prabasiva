'use client'

import { motion } from 'framer-motion'
import { Code2, Palette, Lightbulb, Users } from 'lucide-react'

const skills = [
  { name: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
  { name: 'Backend', items: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST APIs'] },
  { name: 'Tools', items: ['Git', 'Docker', 'AWS', 'Vercel', 'VS Code'] },
]

const highlights = [
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable, and well-documented code',
  },
  {
    icon: Palette,
    title: 'Design Focus',
    description: 'Creating beautiful and intuitive user interfaces',
  },
  {
    icon: Lightbulb,
    title: 'Problem Solving',
    description: 'Finding creative solutions to complex challenges',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Working effectively in cross-functional teams',
  },
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
              <p className="text-gray-300 mb-4">
                I'm a passionate full-stack developer with a love for creating elegant solutions to complex problems. 
                With over 5 years of experience in web development, I've had the opportunity to work on diverse 
                projects ranging from startups to enterprise applications.
              </p>
              <p className="text-gray-300 mb-4">
                My journey in tech started with curiosity about how things work on the web, and it has evolved into 
                a career focused on building meaningful digital experiences that make a difference.
              </p>
              <p className="text-gray-300">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
                or sharing knowledge through technical writing and mentoring.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-4">Technical Skills</h3>
              <div className="space-y-4">
                {skills.map((category, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <h4 className="text-lg font-medium text-gray-200 mb-2">{category.name}</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-gray-700 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-800 rounded-full mb-4">
                  <highlight.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h4 className="text-lg font-semibold mb-2">{highlight.title}</h4>
                <p className="text-gray-400 text-sm">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
'use client'

import { motion } from 'framer-motion'
import { Calendar, Building2 } from 'lucide-react'

const experiences = [
  {
    title: 'Senior Full Stack Developer',
    company: 'Tech Company',
    period: '2022 - Present',
    description: 'Led development of microservices architecture using Next.js and Node.js. Improved application performance by 40% through optimization strategies.',
    technologies: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'AWS'],
  },
  {
    title: 'Full Stack Developer',
    company: 'Startup Inc',
    period: '2020 - 2022',
    description: 'Built and maintained e-commerce platform serving 100k+ users. Implemented real-time features using WebSockets and Redis.',
    technologies: ['React', 'Express', 'MongoDB', 'Redis', 'Docker'],
  },
  {
    title: 'Frontend Developer',
    company: 'Digital Agency',
    period: '2018 - 2020',
    description: 'Developed responsive web applications for various clients. Collaborated with design team to implement pixel-perfect UI components.',
    technologies: ['React', 'Vue.js', 'SASS', 'Webpack', 'Git'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Work Experience
          </h2>
          
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-700" />
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative flex items-start"
                >
                  <div className="absolute left-8 w-4 h-4 bg-blue-500 rounded-full -translate-x-1/2 mt-2" />
                  
                  <div className="ml-20 bg-gray-800 rounded-lg p-6 w-full hover:bg-gray-750 transition-colors">
                    <div className="flex flex-wrap items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                        <div className="flex items-center gap-4 text-gray-400 text-sm mt-1">
                          <span className="flex items-center gap-1">
                            <Building2 className="w-4 h-4" />
                            {exp.company}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.period}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-4">{exp.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
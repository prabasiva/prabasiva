'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.',
    image: '/placeholder-project1.jpg',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    title: 'Task Management App',
    description: 'Collaborative task management application with real-time updates, drag-and-drop functionality, and team features.',
    image: '/placeholder-project2.jpg',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    title: 'AI Content Generator',
    description: 'AI-powered content generation tool using OpenAI API for creating blog posts, social media content, and more.',
    image: '/placeholder-project3.jpg',
    technologies: ['Next.js', 'OpenAI API', 'Tailwind CSS', 'Vercel'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Featured Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="aspect-video bg-gray-800 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                    Project Image
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-gray-300 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
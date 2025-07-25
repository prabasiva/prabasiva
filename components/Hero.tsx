'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ChevronDown, Globe } from 'lucide-react'
import { SiteContent } from '@/types/content'

interface HeroProps {
  content: SiteContent
}

export default function Hero({ content }: HeroProps) {
  const { personal, social, hero } = content

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-black text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              {hero.greeting}
            </span>
            <br />
            <span className="text-white">{personal.name}</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-300 mb-8">
            {hero.subtitle}
          </p>
          
          <p className="text-base sm:text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            {hero.description}
          </p>
          
          <div className="flex justify-center space-x-6 mb-12">
            {social.github && (
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
              >
                <Github className="w-6 h-6" />
              </motion.a>
            )}
            
            {social.linkedin && (
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
            )}
            
            {personal.email && (
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href={`mailto:${personal.email}`}
                className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
              >
                <Mail className="w-6 h-6" />
              </motion.a>
            )}
            
            {social.website && (
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href={social.website}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
              >
                <Globe className="w-6 h-6" />
              </motion.a>
            )}
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector(hero.cta_link)?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-medium hover:from-blue-600 hover:to-purple-700 transition-all"
          >
            {hero.cta_text}
          </motion.button>
        </motion.div>
        
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </motion.div>
      </div>
    </section>
  )
}
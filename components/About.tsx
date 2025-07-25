'use client'

import { motion } from 'framer-motion'
import { Code2, Palette, Lightbulb, Users, TrendingUp, Target } from 'lucide-react'
import Image from 'next/image'
import { SiteContent } from '@/types/content'

interface AboutProps {
  content: SiteContent
}

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  Code2,
  Palette,
  Lightbulb,
  Users,
  TrendingUp,
  Target,
}

export default function About({ content }: AboutProps) {
  const { about } = content

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
            {about.title}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-semibold mb-4">{about.subtitle}</h3>
              {about.bio.map((paragraph, index) => (
                <p key={index} className="text-gray-300 mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
            
            <div className="flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative w-80 h-80"
              >
                <Image
                  src="/praba.png"
                  alt="Praba Siva - Digital Transformation Leader"
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              </motion.div>
            </div>
          </div>
          
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          {('education' in about) && (about as any).education && (
            <div className="mb-16">
              <h3 className="text-2xl font-semibold mb-6 text-center">Education</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                {(about as any).education.map((edu: {degree: string, institution: string, location?: string}, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gray-800 rounded-lg p-4"
                  >
                    <h4 className="text-lg font-medium text-white mb-2">{edu.degree}</h4>
                    <p className="text-gray-300 text-sm mb-1">{edu.institution}</p>
                    {edu.location && (
                      <p className="text-gray-400 text-xs">{edu.location}</p>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          )}
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {about.highlights.map((highlight, index) => {
              const Icon = iconMap[highlight.icon] || Code2
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-800 rounded-full mb-4">
                    <Icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{highlight.title}</h4>
                  <p className="text-gray-400 text-sm">{highlight.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
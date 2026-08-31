import { Github, Linkedin, Mail, Heart, Globe } from 'lucide-react'
import { SiteContent } from '@/types/content'

interface FooterProps {
  content: SiteContent
}

export default function Footer({ content }: FooterProps) {
  const { personal, social, footer } = content
  
  return (
    <footer className="bg-black text-white py-8 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex space-x-6">
            {social.github && (
              <a
                href={social.github}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
            {social.linkedin && (
              <a
                href={social.linkedin}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            )}
            {personal.email && (
              <a
                href={`mailto:${personal.email}`}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            )}
            {social.website && (
              <a
                href={social.website}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Globe className="w-5 h-5" />
              </a>
            )}
          </div>
          
          {footer.links && footer.links.length > 0 && (
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {footer.links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          )}

          <p className="text-gray-400 text-sm flex items-center gap-1">
            {footer.madeWith} <Heart className="w-4 h-4 text-red-500" /> {personal.name}
          </p>
          
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} {footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}
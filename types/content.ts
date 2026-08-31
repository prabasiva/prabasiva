export interface PersonalInfo {
  name: string
  title: string
  tagline: string
  email: string
  phone?: string
  location: string
  bio: string
}

export interface SocialLinks {
  github?: string
  linkedin?: string
  twitter?: string
  website?: string
}

export interface NavigationItem {
  name: string
  href: string
}

export interface HeroContent {
  greeting: string
  subtitle: string
  description: string
  cta_text: string
  cta_link: string
}

export interface Experience {
  title: string
  company: string
  location?: string
  period: string
  description: string
  achievements?: string[]
  technologies: string[]
}

export interface Project {
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  metrics?: string
  period?: string
}

export interface Skill {
  category: string
  items: string[]
}

export interface Highlight {
  icon: string
  title: string
  description: string
}

export interface AboutContent {
  title: string
  subtitle: string
  bio: string[]
  skills?: Skill[]
  education?: {
    degree: string
    institution: string
    location?: string
    year?: string
  }[]
  highlights: Highlight[]
}

export interface FooterContent {
  copyright: string
  madeWith: string
  links?: NavigationItem[]
}

export interface SiteContent {
  personal: PersonalInfo
  social: SocialLinks
  navigation: NavigationItem[]
  hero: HeroContent
  experience: Experience[]
  skills?: Skill[]
  projects: Project[]
  about: AboutContent
  footer: FooterContent
}
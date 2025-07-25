export interface PersonalInfo {
  name: string
  title: string
  tagline: string
  email: string
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
  period: string
  description: string
  technologies: string[]
}

export interface Project {
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
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
  skills: Skill[]
  highlights: Highlight[]
}

export interface FooterContent {
  copyright: string
  madeWith: string
}

export interface SiteContent {
  personal: PersonalInfo
  social: SocialLinks
  navigation: NavigationItem[]
  hero: HeroContent
  experience: Experience[]
  projects: Project[]
  about: AboutContent
  footer: FooterContent
}
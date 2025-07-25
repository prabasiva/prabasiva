import { SiteContent } from '@/types/content'

interface StructuredDataProps {
  content: SiteContent
}

export default function StructuredData({ content }: StructuredDataProps) {
  const { personal, social } = content
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": personal.name,
    "jobTitle": personal.title,
    "description": personal.bio,
    "url": "https://prabasiva.com",
    "sameAs": [
      social.linkedin,
      social.github,
      social.twitter,
      social.website
    ].filter(Boolean),
    "address": {
      "@type": "PostalAddress",
      "addressLocality": personal.location
    },
    "email": personal.email,
    "knowsAbout": [
      "Digital Transformation",
      "Enterprise Architecture", 
      "API Platform Development",
      "GenAI Implementation",
      "Machine Learning",
      "Data Analytics",
      "Cloud Architecture",
      "Engineering Leadership"
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
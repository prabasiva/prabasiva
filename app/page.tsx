import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import About from '@/components/About'
import Footer from '@/components/Footer'
import StructuredData from '@/components/StructuredData'
import { getContent } from '@/lib/content'

export default function Home() {
  const content = getContent()
  
  return (
    <>
      <StructuredData content={content} />
      <Navigation content={content} />
      <main>
        <Hero content={content} />
        <Experience content={content} />
        <Skills content={content} />
        <Projects content={content} />
        <About content={content} />
      </main>
      <Footer content={content} />
    </>
  )
}
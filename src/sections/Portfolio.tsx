import { ArrowUpRight } from 'lucide-react'
import { ProjectCard } from '../components/ProjectCard'
import { SectionHeading } from '../components/SectionHeading'

export function Portfolio() {
  return (
    <section className="section section-tint" id="work">
      <div className="container">
        <div className="portfolio-heading">
          <SectionHeading
            eyebrow="Selected work"
            title="A website I built as a reference."
            description="This coaching institute website is my own demo project, built to show how courses, learning programmes, and student enquiries can be presented online."
          />
          <a className="text-link portfolio-demo-link" href="https://demoweb-five-silk.vercel.app/#home" target="_blank" rel="noreferrer">
            Open my live demo <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
        <ProjectCard />
      </div>
    </section>
  )
}

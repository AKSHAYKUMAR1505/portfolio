import { ArrowUpRight, ExternalLink } from 'lucide-react'
import { project } from '../config'

export function ProjectCard() {
  return (
    <article className="project-card">
      <div className="project-preview" aria-label="Illustrated preview of Akshay's Aarohan Academy demo website">
        <div className="browser-window">
          <div className="browser-bar">
            <span /><span /><span />
            <div className="browser-address">aarohan-academy.example</div>
          </div>
          <div className="preview-site">
            <div className="preview-nav"><b>aarohan<span>.</span></b><span>Courses　 About　 Contact</span><i>Enquire</i></div>
            <div className="preview-content">
              <div className="preview-copy">
                <small>LEARN · GROW · SUCCEED</small>
                <strong>A brighter path<br />starts here.</strong>
                <p>Expert guidance for your next big step.</p>
                <span className="preview-button">Explore programs <ArrowUpRight size={12} /></span>
              </div>
              <div className="preview-art" aria-hidden="true">
                <div className="preview-sun" />
                <div className="preview-book"><span /><span /><span /></div>
                <div className="preview-orbit">✦</div>
              </div>
            </div>
            <div className="preview-bottom"><span>Thoughtful learning, made for you.</span><span>01 / 03</span></div>
          </div>
        </div>
        <div className="preview-tag"><span className="live-dot" /> Built by Akshay</div>
      </div>
      <div className="project-info">
        <div className="project-copy">
          <span className="project-label">{project.type}</span>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
        </div>
        <div className="project-details">
          <div><span>Design objective</span><p>Make course discovery simple and invite prospective students to enquire.</p></div>
          <div><span>Features demonstrated</span><p>Learning programs, clear course details, responsive layout, and enquiry options.</p></div>
          <a className="button button-primary" href={project.url} target="_blank" rel="noreferrer">
            View live demo <ExternalLink size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
      <p className="project-disclaimer">A self-built demo project for a fictional coaching institute, shared as a reference to my work.</p>
    </article>
  )
}

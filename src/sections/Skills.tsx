import { SectionHeading } from '../components/SectionHeading'

const skills = [
  { name: 'React', category: 'UI library', mark: 'R', tone: 'blue' },
  { name: 'TypeScript', category: 'Typed JavaScript', mark: 'TS', tone: 'indigo' },
  { name: 'JavaScript', category: 'Programming', mark: 'JS', tone: 'yellow' },
  { name: 'Tailwind CSS', category: 'Styling', mark: 'TW', tone: 'cyan' },
  { name: 'HTML & CSS', category: 'Web foundations', mark: '</>', tone: 'orange' },
  { name: 'Git', category: 'Version control', mark: 'G', tone: 'red' },
  { name: 'Vercel', category: 'Deployment', mark: '▲', tone: 'dark' },
]

export function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        <SectionHeading
          eyebrow="Tools of the trade"
          title="The building blocks I work with."
          description="A practical toolkit for creating modern, responsive websites."
          centered
        />
        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill.name}>
              <span className={`skill-mark tone-${skill.tone}`} aria-hidden="true">{skill.mark}</span>
              <span className="skill-text"><strong>{skill.name}</strong><small>{skill.category}</small></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

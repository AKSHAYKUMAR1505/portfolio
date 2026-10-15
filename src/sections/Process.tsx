import { ArrowDown, ClipboardList, FileCheck2, MessageCircle, Rocket } from 'lucide-react'
import { SectionHeading } from '../components/SectionHeading'

const steps = [
  { number: '01', title: 'Discuss requirements', text: 'Tell me about your business, your customers, and what you want your website to do.', icon: MessageCircle },
  { number: '02', title: 'Agree on the plan', text: 'We confirm the scope, deliverables, price, revision limits, payment milestones, and timeline.', icon: ClipboardList },
  { number: '03', title: 'Build and review', text: 'I build the agreed website and share it for review, with feedback handled within the agreed scope.', icon: FileCheck2 },
  { number: '04', title: 'Test and deploy', text: 'After testing and your approval, I help deploy the website as agreed in our project scope.', icon: Rocket },
]

export function Process() {
  return (
    <section className="section section-tint" id="process">
      <div className="container">
        <SectionHeading
          eyebrow="A straightforward process"
          title="From first conversation to launch."
          description="Clear expectations help us both work with confidence. Here is how a project typically moves forward."
        />
        <div className="process-grid">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <article className="process-step" key={step.number}>
                <div className="process-top"><span>{step.number}</span><Icon size={20} aria-hidden="true" /></div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
                {index < steps.length - 1 && <ArrowDown className="process-arrow" size={16} aria-hidden="true" />}
              </article>
            )
          })}
        </div>
        <p className="process-note">Deliverables, revision limits, payment milestones, and deadlines are confirmed before development begins.</p>
      </div>
    </section>
  )
}

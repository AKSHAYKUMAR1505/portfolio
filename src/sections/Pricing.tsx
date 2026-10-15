import { ArrowUpRight, Check, Info } from 'lucide-react'
import { pricing } from '../config'
import { SectionHeading } from '../components/SectionHeading'

const inclusions = [
  'Responsive mobile and desktop design',
  `${pricing.includedSections} (confirmed before work begins)`,
  'About, services, and contact information',
  'WhatsApp contact button',
  'Basic testing',
  'Deployment assistance, with scope agreed in advance',
]

export function Pricing() {
  return (
    <section className="section" id="pricing">
      <div className="container pricing-layout">
        <div className="pricing-intro">
          <SectionHeading
            eyebrow="Simple starting point"
            title="Know what to expect before we start."
            description="An introductory package for a small business that needs a clear, professional place online."
          />
          <div className="pricing-reassurance"><Info size={17} aria-hidden="true" /><span>We agree on scope, deliverables, and timeline before any development begins.</span></div>
        </div>
        <article className="price-card">
          <div className="price-card-top">
            <span className="price-kicker">INTRODUCTORY PACKAGE</span>
            <h3>{pricing.starterName}</h3>
            <div className="price"><span>{pricing.starterCurrency}</span>{pricing.starterAmount.toLocaleString('en-IN')}<small> one-time starting price</small></div>
          </div>
          <div className="price-divider" />
          <p className="included-label">What we can include</p>
          <ul className="price-inclusions">
            {inclusions.map((item) => <li key={item}><Check size={16} aria-hidden="true" />{item}</li>)}
          </ul>
          <div className="price-exclusions">
            Domain registration, paid hosting, premium assets, complex integrations, extra pages, and major scope changes may cost extra. These are discussed and agreed before work starts.
          </div>
          <a className="button button-primary price-cta" href="#contact">
            Discuss your project <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </article>
      </div>
    </section>
  )
}

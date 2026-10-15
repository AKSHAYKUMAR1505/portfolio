import type { LucideIcon } from 'lucide-react'
import { ArrowUpRight } from 'lucide-react'

export type ServiceItem = {
  title: string
  description: string
  idealFor: string
  features: string[]
  icon: LucideIcon
}

export function ServiceCard({ service }: { service: ServiceItem }) {
  const Icon = service.icon
  return (
    <article className="service-card">
      <div className="service-icon"><Icon size={22} strokeWidth={1.8} aria-hidden="true" /></div>
      <h3>{service.title}</h3>
      <p className="service-description">{service.description}</p>
      <ul className="feature-list">
        {service.features.map((feature) => <li key={feature}>{feature}</li>)}
      </ul>
      <p className="ideal-for"><span>Good fit for</span>{service.idealFor}</p>
      <a className="text-link" href="#contact">
        Let&apos;s discuss <ArrowUpRight size={15} aria-hidden="true" />
      </a>
    </article>
  )
}

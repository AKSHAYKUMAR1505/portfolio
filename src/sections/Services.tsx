import { Building2, GraduationCap, PanelsTopLeft, RefreshCw } from 'lucide-react'
import { ServiceCard, type ServiceItem } from '../components/ServiceCard'
import { SectionHeading } from '../components/SectionHeading'

const services: ServiceItem[] = [
  {
    title: 'Small business websites',
    description: 'A clear, welcoming home online that helps people understand your business and get in touch.',
    idealFor: 'local shops, service businesses, and growing teams.',
    features: ['Business and service information', 'Mobile-friendly layout', 'Clear contact details'],
    icon: Building2,
  },
  {
    title: 'Coaching institute websites',
    description: 'Present your courses and learning programmes in a way that makes the next step easy to find.',
    idealFor: 'coaching institutes, tuition centres, and tutors.',
    features: ['Course and programme details', 'Student enquiry pathways', 'Organised information'],
    icon: GraduationCap,
  },
  {
    title: 'Landing pages',
    description: 'A focused page for a particular service, event, or offer—with a clear message and call to action.',
    idealFor: 'independent professionals and specific campaigns.',
    features: ['Single, focused page', 'Purposeful content sections', 'Prominent action links'],
    icon: PanelsTopLeft,
  },
  {
    title: 'Website redesigns',
    description: 'Refresh an existing site with a more considered layout, clearer content, and responsive styling.',
    idealFor: 'businesses ready to improve their current website.',
    features: ['Updated visual direction', 'Improved page structure', 'Responsive refinements'],
    icon: RefreshCw,
  },
]

export function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <SectionHeading
          eyebrow="Ways I can help"
          title="A website for where you are right now."
          description="Start with what your customers need to know. We can shape the right kind of website around your goals and agreed scope."
        />
        <div className="services-grid">
          {services.map((service) => <ServiceCard key={service.title} service={service} />)}
        </div>
      </div>
    </section>
  )
}

import { ArrowUpRight, Mail, MapPin, MessageCircle } from 'lucide-react'
import { ContactForm } from '../components/ContactForm'
import { emailUrl, profile, whatsappUrl } from '../config'
import { SectionHeading } from '../components/SectionHeading'

export function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="contact-heading">
          <SectionHeading
            eyebrow="Let’s talk"
            title="Tell me a little about what you’re building."
            description="Share the basics and we can figure out the right next step—no pressure and no obligation."
          />
        </div>
        <div className="contact-grid">
          <div className="contact-aside">
            <h3>Prefer a direct conversation?</h3>
            <p>Reach out in whichever way feels easiest. I’m based in Bengaluru and work with businesses near and far.</p>
            <a className="contact-method" href={emailUrl}><span className="contact-method-icon"><Mail size={19} /></span><span><small>Email</small><strong>{profile.email}</strong></span><ArrowUpRight size={16} /></a>
            <a className="contact-method" href={whatsappUrl} target="_blank" rel="noreferrer"><span className="contact-method-icon whatsapp-icon"><MessageCircle size={19} /></span><span><small>WhatsApp</small><strong>{profile.whatsappNumber}</strong></span><ArrowUpRight size={16} /></a>
            <div className="contact-location"><MapPin size={17} aria-hidden="true" /><span>{profile.location}</span></div>
            <div className="contact-aside-note"><span className="live-dot" /> Open to project enquiries</div>
          </div>
          <div className="form-panel">
            <div className="form-panel-heading"><span>PROJECT ENQUIRY</span><h3>What do you have in mind?</h3></div>
            <ContactForm />
          </div>
        </div>
        <div className="contact-bottom-cta">
          <span>Not sure where to start? That’s okay.</span>
          <a href={emailUrl}>Send a quick email <ArrowUpRight size={15} aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  )
}

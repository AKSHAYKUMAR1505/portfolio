import { ArrowUpRight, Mail } from 'lucide-react'
import { emailUrl, navigation, profile, whatsappUrl } from '../config'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <a className="brand" href="#home">
              <span className="brand-mark">{profile.initials}</span>
              <span>{profile.name}</span>
            </a>
            <p>Thoughtful websites for people building something of their own.</p>
          </div>
          <div className="footer-links">
            <span className="footer-label">Explore</span>
            {navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
          </div>
          <div className="footer-links">
            <span className="footer-label">Say hello</span>
            <a href={emailUrl}><Mail size={15} aria-hidden="true" /> Email me</a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp <ArrowUpRight size={15} aria-hidden="true" /></a>
            <span className="footer-location">{profile.location}</span>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
          <a href="#home">Back to top ↑</a>
        </div>
      </div>
    </footer>
  )
}

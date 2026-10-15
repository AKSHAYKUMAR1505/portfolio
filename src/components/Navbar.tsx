import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { navigation, profile } from '../config'

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (!menuOpen) return
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen])

  return (
    <header className="site-header">
      <nav className="nav-shell container" aria-label="Main navigation">
        <a className="brand" href="#home" aria-label={`${profile.name}, home`}>
          <span className="brand-mark">{profile.initials}</span>
          <span>{profile.name}</span>
        </a>
        <div className="desktop-nav">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
        <a className="button button-primary nav-cta" href="#contact">
          Contact me <ArrowUpRight size={16} aria-hidden="true" />
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      <div
        id="mobile-navigation"
        className={`mobile-nav${menuOpen ? ' is-open' : ''}`}
        hidden={!menuOpen}
      >
        {navigation.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
            {item.label}
          </a>
        ))}
        <a className="mobile-contact" href="#contact" onClick={() => setMenuOpen(false)}>
          Contact me <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </div>
    </header>
  )
}

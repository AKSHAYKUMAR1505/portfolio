import { ArrowDown, ArrowUpRight, Check, Code2, Layout, Smartphone } from 'lucide-react'

export function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-grid container">
        <div className="hero-content">
          <div className="availability"><span className="live-dot" /> Freelance enquiries welcome</div>
          <h1>Websites that help your business <span>grow online.</span></h1>
          <p className="hero-description">
            I build clean, responsive websites for small businesses, coaching institutes, and independent professionals.
          </p>
          <div className="hero-actions">
            <a className="button button-primary button-large" href="#contact">
              Discuss your website <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <a className="button button-secondary button-large" href="#work">
              View my work <ArrowDown size={17} aria-hidden="true" />
            </a>
          </div>
          <div className="hero-footnote"><Check size={15} aria-hidden="true" /> Clear scope, practical design, no inflated promises.</div>
        </div>
        <div className="hero-visual" aria-label="Illustration of a responsive business website">
          <div className="visual-glow" />
          <div className="floating-chip chip-top"><span className="chip-icon"><Smartphone size={16} /></span><span>Made for every screen</span></div>
          <div className="hero-browser">
            <div className="hero-browser-top"><span /><span /><span /><div>yourbusiness.in</div></div>
            <div className="hero-browser-page">
              <div className="mock-nav"><b>YOUR BRAND</b><span>About　 Services　 Contact</span><i>Let&apos;s talk <ArrowUpRight size={11} /></i></div>
              <div className="mock-hero">
                <div className="mock-copy">
                  <small>WELCOME TO YOUR NEXT CHAPTER</small>
                  <strong>A good first<br />impression goes<br /><em>a long way.</em></strong>
                  <p>A considered online home for your business.</p>
                  <span className="mock-cta">Explore what we do <ArrowUpRight size={11} /></span>
                </div>
                <div className="mock-illustration" aria-hidden="true">
                  <div className="mock-shape shape-back" />
                  <div className="mock-shape shape-front"><div /><div /><div /></div>
                  <div className="mock-star">✳</div>
                </div>
              </div>
              <div className="mock-footer"><span>Thoughtful by design.</span><span>01 — 03</span></div>
            </div>
          </div>
          <div className="floating-chip chip-bottom"><span className="chip-code"><Code2 size={16} /></span><span>Designed with care</span></div>
          <div className="visual-caption"><Layout size={14} aria-hidden="true" /> A little preview of what we can build together</div>
        </div>
      </div>
      <a className="scroll-cue" href="#services" aria-label="Scroll to services"><span /> Scroll to explore</a>
    </section>
  )
}

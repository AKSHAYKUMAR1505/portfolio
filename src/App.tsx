import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { Contact } from './sections/Contact'
import { Hero } from './sections/Hero'
import { Portfolio } from './sections/Portfolio'
import { Pricing } from './sections/Pricing'
import { Process } from './sections/Process'
import { Services } from './sections/Services'
import { Skills } from './sections/Skills'
import { FAQ } from './components/FAQ'

function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Services />
        <Portfolio />
        <Pricing />
        <Skills />
        <Process />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App

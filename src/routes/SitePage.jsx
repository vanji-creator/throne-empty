import { Link } from 'react-router-dom'
import Atmosphere from '../sections/Atmosphere.jsx'
import Hero from '../sections/Hero.jsx'
import Argument from '../sections/Argument.jsx'
import Redesign from '../sections/Redesign.jsx'
import CatchUp from '../sections/CatchUp.jsx'
import Outro from '../sections/Outro.jsx'
import ScrollCue from '../components/ScrollCue.jsx'
import useReveal from '../hooks/useReveal.js'
import useImmersion from '../hooks/useImmersion.js'

export default function SitePage() {
  useReveal()
  useImmersion()
  return (
    <>
      <Atmosphere />
      <header className="relative z-[5] pt-[28px]">
        <div className="container flex items-center justify-between">
          <span className="font-mono text-[12px] uppercase tracking-[0.12em] text-ink-soft">Throne Empty</span>
          <nav className="flex items-center gap-[16px] font-mono text-[10.5px] uppercase tracking-[0.1em]">
            <Link to="/pdf" className="text-ink-mute hover:text-accent">PDF</Link>
            <Link to="/gallery" className="text-ink-mute hover:text-accent">Gallery →</Link>
          </nav>
        </div>
      </header>
      <main>
        <Hero />
        <Argument />
        <Redesign />
        <CatchUp />
        <Outro />
      </main>
      <ScrollCue />
    </>
  )
}

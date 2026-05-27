import { Link } from 'react-router-dom'
import Atmosphere from '../sections/Atmosphere.jsx'
import Hero from '../sections/Hero.jsx'
import Argument from '../sections/Argument.jsx'
import Redesign from '../sections/Redesign.jsx'
import CatchUp from '../sections/CatchUp.jsx'
import Outro from '../sections/Outro.jsx'
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
          <Link to="/gallery" className="font-mono text-[10.5px] uppercase tracking-[0.1em] text-ink-mute hover:text-accent">Gallery →</Link>
        </div>
      </header>
      <main>
        <Hero />
        <Argument />
        <Redesign />
        <CatchUp />
        <Outro />
      </main>
    </>
  )
}

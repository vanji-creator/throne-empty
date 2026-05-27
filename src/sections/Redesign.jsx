import PhoneFrame from '../components/PhoneFrame.jsx'
import { SCREENS } from '../screens/index.js'
import { NOTES } from '../data/notes.js'

function Notes({ note }) {
  const center = note.center
  return (
    <div className={`reveal mx-auto px-[20px] ${center ? 'max-w-[760px] text-center' : 'max-w-[640px]'}`} style={{ '--delay': '120ms' }}>
      <div className="mb-[32px]">
        <span className="font-mono text-[10.5px] uppercase tracking-[0.1em] text-accent">{note.num}</span>
        <h3 className="display display--sm mb-[24px] mt-[18px]">{note.title[0]}<em>{note.title[1]}</em></h3>
        <p className="prose text-[16px] leading-[1.6] text-ink-mute">{note.crit}</p>
      </div>

      {note.annots.length > 0 && (
        <ol className="flex flex-col gap-[18px] border-t border-rule pt-[28px] text-left">
          {note.annots.map(([strong, rest], i) => (
            <li key={i} className="grid grid-cols-[36px_1fr] items-start gap-[18px] text-[15px] leading-[1.55] text-ink-mute">
              <span className="flex h-[26px] w-[26px] items-center justify-center rounded-full border border-accent font-mono text-[11px] text-accent">{i + 1}</span>
              <div><strong className="font-medium text-ink">{strong}</strong> {rest}</div>
            </li>
          ))}
        </ol>
      )}

      <p className="mt-[28px] font-display text-[19px] italic leading-[1.4] text-ink-soft">
        <span className="mr-[8px] font-mono text-[10.5px] not-italic uppercase tracking-[0.1em] text-accent">Fix —</span>
        {note.fix}
      </p>
    </div>
  )
}

function Screen({ screen }) {
  const { Component, variant } = screen
  return (
    <article className="relative mb-[clamp(40px,6vw,80px)]">
      <div data-pin-root className="relative h-[200vh]">
        <div className="sticky top-0 flex h-screen items-center justify-center">
          <PhoneFrame variant={variant} className="immersive">
            <Component />
          </PhoneFrame>
        </div>
      </div>
      <Notes note={NOTES[screen.id]} />
    </article>
  )
}

export default function Redesign() {
  return (
    <section id="redesign" className="section">
      <div className="container">
        <div className="section-marker reveal">
          <span className="section-marker__num">03</span>
          <span className="section-marker__lbl">The Redesign · Six Screens</span>
        </div>
        {SCREENS.map((s) => <Screen key={s.id} screen={s} />)}
      </div>
    </section>
  )
}

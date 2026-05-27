import { Link } from 'react-router-dom'
import { CARDS } from './cards.jsx'

// Human-browsable overview: every artboard scaled down to fit, labelled.
// (The full-size export comes from /shot/:id, not from here.)
const PREVIEW = 0.34

function CardPreview({ card }) {
  return (
    <figure className="flex flex-col items-center gap-[14px]">
      <div
        className="overflow-hidden rounded-[6px] border border-rule"
        style={{ width: card.w * PREVIEW, height: card.h * PREVIEW }}
      >
        <div style={{ width: card.w, height: card.h, transform: `scale(${PREVIEW})`, transformOrigin: 'top left' }}>
          {card.render()}
        </div>
      </div>
      <figcaption className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-mute">{card.id}</figcaption>
    </figure>
  )
}

export default function GalleryPage() {
  const rawShots = CARDS.filter((c) => !/^s[1-6]$/.test(c.id))
  const slides = CARDS.filter((c) => /^s[1-6]$/.test(c.id))

  return (
    <div className="min-h-screen bg-bg-deep px-[24px] pb-[120px] pt-[28px]">
      <div className="mb-[36px] flex items-center gap-[16px]">
        <span className="font-mono text-[12px] uppercase tracking-[0.12em] text-ink-mute">Throne Empty — Mockup Gallery</span>
        <Link to="/" className="font-mono text-[11px] uppercase tracking-[0.1em] text-accent">← back to site</Link>
      </div>

      <h2 className="mb-[24px] font-mono text-[11px] uppercase tracking-[0.18em] text-ink-dim">— Raw phone shots —</h2>
      <div className="mb-[64px] flex flex-wrap items-start justify-center gap-[40px]">
        {rawShots.map((c) => <CardPreview key={c.id} card={c} />)}
      </div>

      <h2 className="mb-[24px] font-mono text-[11px] uppercase tracking-[0.18em] text-ink-dim">— Composed carousel slides —</h2>
      <div className="flex flex-wrap items-start justify-center gap-[40px]">
        {slides.map((c) => <CardPreview key={c.id} card={c} />)}
      </div>
    </div>
  )
}

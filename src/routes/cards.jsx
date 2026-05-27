import PhoneFrame from '../components/PhoneFrame.jsx'
import { SCREEN_BY_ID } from '../screens/index.js'

const P = { w: 1080, h: 1350 } // portrait artboard
const W = { w: 1350, h: 1080 } // wide artboard (landscape phone)

function Backdrop({ children }) {
  return (
    <div className="art-backdrop grain-layer relative flex h-full w-full items-center justify-center overflow-hidden">
      {children}
    </div>
  )
}

function Stage({ id, scale = 1.62 }) {
  const { Component, variant } = SCREEN_BY_ID[id]
  return (
    <div style={{ transform: `scale(${scale})` }}>
      <PhoneFrame variant={variant}>
        <Component />
      </PhoneFrame>
    </div>
  )
}

function Tag({ children }) {
  return <div className="absolute left-[56px] top-[46px] z-[5] font-mono text-[19px] uppercase tracking-[0.12em] text-accent">{children}</div>
}
function Cap({ children }) {
  return <div className="z-[5] mt-[42px] max-w-[80%] text-center font-mono text-[21px] uppercase leading-[1.5] tracking-[0.06em] text-ink-mute [&_b]:font-medium [&_b]:text-ink">{children}</div>
}

// ---- raw phone shots ----
const RAW = [
  { id: 'np',        tag: '01 / Now Playing', size: P, scale: 1.62 },
  { id: 'library',   tag: '02 / Library',     size: P, scale: 1.62 },
  { id: 'search',    tag: '03 / Search',      size: P, scale: 1.62 },
  { id: 'queue',     tag: '04 / Queue',       size: P, scale: 1.62 },
  { id: 'home',      tag: '06 / Home',        size: P, scale: 1.62 },
  { id: 'landscape', tag: '05 / Landscape',   size: W, scale: 1.95 },
].map((r) => ({
  id: `${r.id === 'landscape' ? 'landscape' : r.id}`,
  ...r.size,
  render: () => <Backdrop><Tag>{r.tag}</Tag><Stage id={r.id} scale={r.scale} /></Backdrop>,
}))

// ---- composed carousel slides ----
function Triptych() {
  return (
    <div className="flex items-center justify-center gap-[26px]">
      {['library', 'search', 'queue'].map((id) => (
        <div key={id} style={{ zoom: 0.66 }}>
          <PhoneFrame variant="portrait"><SlotScreen id={id} /></PhoneFrame>
        </div>
      ))}
    </div>
  )
}
function SlotScreen({ id }) {
  const { Component } = SCREEN_BY_ID[id]
  return <Component />
}

const SLIDES = [
  {
    id: 's1', ...P,
    render: () => (
      <Backdrop>
        <div className="absolute left-0 right-0 top-[80px] text-center font-mono text-[20px] uppercase tracking-[0.14em] text-ink-dim">A YouTube Music Redesign</div>
        <div className="text-center font-display text-[188px] leading-[0.9] tracking-[-0.02em]">Throne<br /><em className="italic text-accent">Empty.</em></div>
        <div className="absolute bottom-[80px] left-0 right-0 text-center font-mono text-[22px] uppercase tracking-[0.16em] text-ink-mute">Case Study · iOS · 2026</div>
      </Backdrop>
    ),
  },
  {
    id: 's2', ...P,
    render: () => (
      <Backdrop>
        <div className="max-w-[880px] px-[80px] text-center font-display text-[96px] leading-[1.08] tracking-[-0.015em]">
          The best recommendation engine in music.<br />One of the most <em className="italic text-accent">frustrating</em> apps.
          <div className="mx-auto mt-[56px] h-[3px] w-[64px] bg-accent" />
        </div>
      </Backdrop>
    ),
  },
  {
    id: 's3', ...P,
    render: () => (
      <Backdrop>
        <div className="flex flex-col items-center">
          <Stage id="np" scale={1.3} />
          <Cap><b>01 / Now Playing</b> — one canonical layout. lyrics inline.</Cap>
        </div>
      </Backdrop>
    ),
  },
  {
    id: 's4', ...P,
    render: () => (
      <Backdrop>
        <div className="flex flex-col items-center">
          <Triptych />
          <Cap><b>02 · 03 · 04</b> — flat nav. honest search. a queue you own.</Cap>
        </div>
      </Backdrop>
    ),
  },
  {
    id: 's5', ...P,
    render: () => (
      <Backdrop>
        <div className="flex flex-col items-center">
          <Stage id="home" scale={1.3} />
          <Cap><b>06 / Home</b> — the engine, given room.</Cap>
        </div>
      </Backdrop>
    ),
  },
  {
    id: 's6', ...P,
    render: () => (
      <Backdrop>
        <div className="px-[90px] text-center font-display text-[110px] leading-[1.02] tracking-[-0.015em]">Read the full<br /><em className="italic text-accent">case study.</em></div>
        <div className="absolute bottom-[150px] left-0 right-0 text-center font-mono text-[24px] uppercase tracking-[0.16em] text-ink-mute">Link in the pinned comment</div>
        <div className="absolute bottom-[70px] left-0 right-0 text-center font-display text-[56px] italic text-accent">v.</div>
      </Backdrop>
    ),
  },
]

// ---- social / link-preview card (Open Graph 1.91:1) ----
const OG = {
  id: 'og', w: 1200, h: 630,
  render: () => (
    <Backdrop>
      <div className="flex w-full items-center justify-between px-[96px]">
        <div className="max-w-[600px]">
          <div className="mb-[26px] font-mono text-[19px] uppercase tracking-[0.16em] text-ink-dim">A YouTube Music Redesign</div>
          <div className="font-display text-[140px] leading-[0.88] tracking-[-0.02em]">Throne<br /><em className="italic text-accent">Empty.</em></div>
          <div className="mt-[36px] h-[3px] w-[64px] bg-accent" />
          <div className="mt-[30px] font-mono text-[20px] uppercase tracking-[0.14em] text-ink-mute">Case Study · iOS · 2026</div>
        </div>
        <div className="shrink-0" style={{ zoom: 0.74 }}>
          <PhoneFrame variant="portrait"><SlotScreen id="np" /></PhoneFrame>
        </div>
      </div>
    </Backdrop>
  ),
}

export const CARDS = [...RAW, ...SLIDES, OG]
export const CARD_BY_ID = Object.fromEntries(CARDS.map((c) => [c.id, c]))

// filenames for the export script (kept in sync here)
export const EXPORT_NAMES = {
  np: 'np', library: 'library', search: 'search', queue: 'queue', home: 'home', landscape: 'landscape',
  s1: 'slide-1-cover', s2: 'slide-2-thesis', s3: 'slide-3-nowplaying', s4: 'slide-4-triptych', s5: 'slide-5-home', s6: 'slide-6-cta',
  og: 'og-card',
}

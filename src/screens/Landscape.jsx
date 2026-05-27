import { Prev, Next, Play } from '../components/Icons.jsx'
import { nowPlaying as np, landscapeLyrics } from '../data/content.js'

// Standalone NP-in-landscape (no tab bar). Authored at the 588×272 design and
// scaled as a single unit: root font-size = device width / 38, everything in em.
const LAND_BG =
  'radial-gradient(120% 90% at 0% 0%, rgba(217,74,61,0.10) 0%, rgba(217,74,61,0) 55%), linear-gradient(135deg, #1a1714 0%, #0d0c0b 100%)'

export default function Landscape() {
  return (
    <div
      className="grid h-full w-full grid-cols-[1fr_1.3fr] items-center gap-[1.5em] pt-[1.15em] pr-[1.6em] pb-[1.15em] pl-[2.7em] text-ink"
      style={{ fontSize: 'calc(var(--w) / 38)', background: LAND_BG }}
    >
      {/* left: art + meta + progress + transport */}
      <div className="flex min-h-0 flex-col items-center justify-center gap-[0.6em]">
        <div className="album-mesh relative aspect-square w-[6em] max-w-full shrink-0 rounded-[0.5em] shadow-[0_0.55em_1.1em_rgba(0,0,0,0.35)]">
          <div className="album-hatch absolute inset-0 flex items-center justify-center">
            <span className="font-mono text-[0.5em] uppercase tracking-[0.2em] text-[rgba(244,237,226,0.55)]">Album&nbsp;Art</span>
          </div>
        </div>
        <div className="text-center">
          <div className="font-display text-[1.18em] leading-[1.05] text-balance">{np.title}</div>
          <div className="mt-[0.15em] text-[0.72em] text-ink-mute">{np.artist}</div>
        </div>
        <div className="w-full px-[0.3em]">
          <div className="relative h-[0.2em] overflow-hidden rounded-[2px] bg-ink-faint">
            <div className="absolute left-0 top-0 h-full rounded-[2px] bg-ink-soft" style={{ width: `${np.progress}%` }} />
          </div>
          <div className="mt-[0.45em] flex justify-between font-mono text-[0.62em] tracking-[0.06em] text-ink-mute">
            <span>{np.times[0]}</span><span>{np.times[1]}</span>
          </div>
        </div>
        <div className="flex items-center justify-center gap-[1.3em]">
          <button className="flex h-[2em] w-[2em] items-center justify-center text-ink"><Prev /></button>
          <button className="flex h-[2.6em] w-[2.6em] items-center justify-center rounded-full bg-accent text-white shadow-[0_0.4em_0.9em_rgba(217,74,61,0.4)]"><Play /></button>
          <button className="flex h-[2em] w-[2em] items-center justify-center text-ink"><Next /></button>
        </div>
      </div>

      {/* right: synced lyrics */}
      <div className="flex min-h-0 flex-col justify-center gap-[0.45em] overflow-hidden pr-[0.3em]">
        <div className="font-mono text-[0.62em] uppercase tracking-[0.08em] text-accent">Lyrics · Synced</div>
        <div className="flex flex-col gap-[0.32em] text-[0.82em] leading-[1.35] text-ink-faint">
          {landscapeLyrics.map((l, i) =>
            l.active ? (
              <div key={i} className="my-[0.08em] font-display text-[1.55em] italic leading-[1.2] text-accent">{l.t}</div>
            ) : (
              <div key={i} style={l.fade ? { opacity: 0.45 } : undefined}>{l.t}</div>
            )
          )}
        </div>
      </div>
    </div>
  )
}

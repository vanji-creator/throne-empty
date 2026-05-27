import { sw } from '../data/content.js'

const CARD_BG = { background: 'linear-gradient(180deg, var(--color-bg-card) 0%, var(--color-bg) 100%)' }

function Feat({ code, kicker, title, em, copy, children, delay }) {
  return (
    <article className="reveal flex min-h-[380px] flex-col gap-[16px] rounded-[4px] border border-rule p-[clamp(24px,2.5vw,36px)]" style={{ ...CARD_BG, '--delay': delay }}>
      <div className="flex items-center gap-[12px] border-b border-rule pb-[14px]">
        <span className="font-mono text-[10.5px] uppercase tracking-[0.1em] text-accent">{code}</span>
        <span className="font-mono text-[10.5px] uppercase tracking-[0.1em] text-ink-dim">{kicker}</span>
      </div>
      <h4 className="display display--xs">{title}<em>{em}</em></h4>
      <p className="prose text-[14.5px] leading-[1.5] text-ink-mute">{copy}</p>
      <div className="mt-auto border-t border-rule pt-[18px]">{children}</div>
    </article>
  )
}

const STACK = [{ left: 0, top: 8 }, { left: 14, top: 4 }, { left: 28, top: 0 }]
function Folder({ name, count, cards }) {
  return (
    <div className="rounded-[8px] border border-rule bg-[rgba(244,237,226,0.03)] px-[12px] py-[10px]">
      <div className="relative mb-[8px] h-[50px]">
        {cards.map((bg, i) => <span key={i} className="feat-folder__card" style={{ background: bg, ...STACK[i] }} />)}
      </div>
      <div className="font-display text-[14px]">{name}</div>
      <div className="mt-[2px] font-mono text-[10.5px] uppercase tracking-[0.1em] text-ink-dim">{count}</div>
    </div>
  )
}

export default function CatchUp() {
  return (
    <section id="catchup" className="section">
      <div className="container">
        <div className="section-marker reveal">
          <span className="section-marker__num">04</span>
          <span className="section-marker__lbl">The Catch-Up · Six Overdue Features</span>
        </div>
        <p className="display display--sm reveal mb-[clamp(48px,6vw,80px)] max-w-[900px]" style={{ '--delay': '60ms' }}>
          No new science. Just <em>features the rest of the industry shipped years ago.</em>
        </p>

        <div className="grid gap-[clamp(16px,2vw,28px)] md:grid-cols-2 xl:grid-cols-3">
          <Feat code="F01" kicker="Synced lyrics" title="Karaoke timing. " em="Offline." delay="80ms"
            copy="Word-level timing, translation toggle, offline lyrics cache. The lyric experience that lyric searches have been training the model for.">
            <div className="feat-lyric feat-lyric--past">there's no time to be timid</div>
            <div className="feat-lyric feat-lyric--active">pull me out of this, delilah</div>
            <div className="feat-lyric feat-lyric--next">it's just dust on a window</div>
            <div className="feat-lyric">just light through the curtain</div>
          </Feat>

          <Feat code="F02" kicker="Crossfade & gapless" title="Crossfade. " em="Off by default." delay="140ms"
            copy="Variable 0–12 second crossfade and true gapless playback. Off by default — because the album was sequenced for a reason.">
            <div className="feat-slider__track"><div className="feat-slider__fill" /><div className="feat-slider__knob" /></div>
            <div className="mt-[10px] flex justify-between font-mono text-[9.5px] uppercase tracking-[0.08em] text-ink-mute">
              {['OFF', '3s', '6s', '9s', '12s'].map((s) => <span key={s}>{s}</span>)}
            </div>
            <div className="mt-[12px] font-mono text-[10.5px] uppercase tracking-[0.1em] text-ink-dim">CROSSFADE · 0s</div>
          </Feat>

          <Feat code="F03" kicker="Real equalizer" title="10 bands. " em="Lossless." delay="200ms"
            copy="Real 10-band parametric EQ with Standard / High / Lossless quality presets. The audiophile tax stops here.">
            <div className="feat-eq">
              {[30, 55, 70, 88, 72, 50, 38, 45, 58, 72].map((h, i) => <div key={i} className="feat-eq__bar" style={{ '--h': `${h}%` }} />)}
            </div>
            <div className="mt-[8px] flex justify-between font-mono text-[9px] uppercase tracking-[0.06em] text-ink-mute">
              {['60', '150', '400', '1K', '2.4K', '6K', '15K'].map((s) => <span key={s}>{s}</span>)}
            </div>
          </Feat>

          <Feat code="F04" kicker="Offline reliability" title="Downloads " em="that stay." delay="80ms"
            copy="Survive auth refreshes, re-installs, OS updates. Persistent status indicator. No silent expirations the night before a flight.">
            <div className="feat-off-row">
              <div className="feat-off-dot" />
              <div><div className="text-[13px] text-ink">Late-night sketches</div><div className="font-mono text-[10.5px] uppercase tracking-[0.08em] text-ink-dim">412 SONGS / 1.4 GB</div></div>
              <div className="font-mono text-[10.5px] uppercase tracking-[0.08em] text-ink-soft">DOWNLOADED</div>
            </div>
            <div className="feat-off-row">
              <div className="feat-off-dot feat-off-dot--amber" />
              <div><div className="text-[13px] text-ink">Workouts</div><div className="font-mono text-[10.5px] uppercase tracking-[0.08em] text-ink-dim">78 SONGS / 246 MB</div></div>
              <div className="font-mono text-[10.5px] uppercase tracking-[0.08em] text-ink-soft">87%</div>
            </div>
          </Feat>

          <Feat code="F05" kicker="Sleep timer" title="Fade to " em="silence." delay="140ms"
            copy="15 / 30 / 60 min, end-of-song, end-of-album. Auto-fade across the last 8 seconds — so the music ends, not the device.">
            <div className="flex items-center gap-[18px]">
              <svg viewBox="0 0 100 100" className="h-[64px] w-[64px] shrink-0">
                <circle cx="50" cy="50" r="42" fill="none" stroke="var(--color-rule)" strokeWidth="2" />
                <circle cx="50" cy="50" r="42" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeDasharray="264" strokeDashoffset="80" transform="rotate(-90 50 50)" />
                <circle cx="50" cy="50" r="2" fill="var(--color-ink)" />
              </svg>
              <div>
                <div className="feat-sleep__time">21:14</div>
                <div className="font-mono text-[10.5px] uppercase tracking-[0.1em] text-ink-dim">REMAINING</div>
              </div>
            </div>
          </Feat>

          <Feat code="F06" kicker="Playlist folders" title="Group. " em="Nest. Drag." delay="200ms"
            copy="Playlist folders. The library structure feature Spotify shipped in 2017. Not novel. Just expected.">
            <div className="grid grid-cols-2 gap-[12px]">
              <Folder name="Late-night" count="12 PLAYLISTS" cards={[sw.red, sw.blue, sw.gold]} />
              <Folder name="Workouts" count="8 PLAYLISTS" cards={[sw.green, sw.deepred, sw.deepblue]} />
            </div>
          </Feat>
        </div>
      </div>
    </section>
  )
}

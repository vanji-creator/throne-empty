import PhoneScreen from '../components/PhoneScreen.jsx'
import { Back, More, Drag } from '../components/Icons.jsx'
import { queue as d } from '../data/content.js'

export default function Queue() {
  return (
    <PhoneScreen active="playing">
      <div className="grid grid-cols-[28px_1fr_28px] items-center gap-[12px] px-[22px] pt-[16px] pb-[4px]">
        <span className="text-[28px] leading-none text-ink-soft"><Back /></span>
        <div className="text-center">
          <div className="font-display text-[20px] leading-[1.1]">{d.title}</div>
          <div className="font-mono text-[9.5px] uppercase tracking-[0.1em] text-ink-dim">{d.meta}</div>
        </div>
        <span className="text-[22px] leading-none text-ink-soft inline-flex justify-end"><More /></span>
      </div>

      <div className="flex gap-[8px] border-b border-rule px-[22px] pb-[12px] pt-[8px]">
        {d.actions.map((a) => (
          <button key={a} className="rounded-full border border-rule bg-[rgba(244,237,226,0.03)] px-[12px] py-[7px] font-mono text-[9px] uppercase tracking-[0.1em] text-ink">{a}</button>
        ))}
        <button className="rounded-full border border-accent-deep bg-[rgba(244,237,226,0.03)] px-[12px] py-[7px] font-mono text-[9px] uppercase tracking-[0.1em] text-accent">Shuffle</button>
      </div>

      <div className="grid grid-cols-[44px_1fr_auto] items-center gap-[12px] border-b border-rule bg-[rgba(217,74,61,0.04)] px-[22px] py-[14px]">
        <div className="album-mesh h-[44px] w-[44px] rounded-[4px]" />
        <div>
          <div className="font-mono text-[9.5px] uppercase tracking-[0.1em] text-accent">NOW PLAYING</div>
          <div className="mt-[2px] font-display text-[15px] leading-[1.1]">{d.nowPlaying.title}</div>
          <div className="mt-[1px] text-[11px] text-ink-mute">{d.nowPlaying.artist}</div>
        </div>
        <div className="flex h-[18px] items-end gap-[2px]">
          {[60, 90, 50, 75].map((h, i) => (
            <span key={i} className="anim-wave block w-[3px] rounded-[1px] bg-accent" style={{ height: `${h}%`, animationDelay: `${[-0.2, -0.5, -0.8, -0.3][i]}s` }} />
          ))}
        </div>
      </div>

      <div className="py-[6px]">
        {d.rows.map((r) => (
          <div key={r.title} className="grid grid-cols-[20px_38px_1fr_auto] items-center gap-[12px] px-[22px] py-[8px]">
            <div className="text-[14px] leading-none text-ink-dim"><Drag /></div>
            <div className="h-[38px] w-[38px] rounded-[4px]" style={{ background: r.art }} />
            <div>
              <div className="text-[13px] text-ink">{r.title}</div>
              <div className="mt-[1px] text-[11px] text-ink-mute">{r.artist}</div>
            </div>
            <div className="text-[14px] text-ink-dim"><More /></div>
          </div>
        ))}
      </div>
    </PhoneScreen>
  )
}

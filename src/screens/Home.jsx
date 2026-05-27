import PhoneScreen from '../components/PhoneScreen.jsx'
import { Chevron, Play } from '../components/Icons.jsx'
import { home as d } from '../data/content.js'

function SecHead({ children, chevron = true }) {
  return (
    <div className="mb-[10px] flex items-center justify-between">
      <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-mute">{children}</span>
      {chevron && <span className="text-[12px] text-ink-dim"><Chevron /></span>}
    </div>
  )
}

export default function Home() {
  return (
    <PhoneScreen active="home">
      <div className="flex items-center justify-between px-[22px] pt-[20px] pb-[12px]">
        <div>
          <div className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-dim">{d.kicker}</div>
          <h4 className="mt-[2px] font-display text-[22px] leading-[1.1]">{d.greet}</h4>
        </div>
        <div className="flex h-[32px] w-[32px] items-center justify-center rounded-full font-display text-[15px] italic text-white" style={{ background: 'linear-gradient(135deg, var(--color-accent), var(--color-accent-deep))' }}>{d.avatar}</div>
      </div>

      <div className="px-[22px] pb-[16px] pt-[8px]">
        <SecHead>Made for you</SecHead>
        <div className="grid grid-cols-[100px_1fr] items-center gap-[14px] rounded-[12px] border border-rule bg-[rgba(244,237,226,0.04)] p-[12px]">
          <div className="album-mesh h-[100px] w-[100px] rounded-[6px]" />
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.1em] text-accent">{d.hero.eyebrow}</div>
            <div className="mt-[4px] font-display text-[19px] leading-[1.1]">{d.hero.title}</div>
            <div className="mt-[3px] text-[10.5px] leading-[1.3] text-ink-mute">{d.hero.sub}</div>
            <button className="mt-[10px] inline-flex items-center gap-[4px] rounded-full bg-accent px-[12px] py-[6px] text-[11px] text-white"><Play style={{ width: '1.1em', height: '1.1em' }} />&nbsp;Play</button>
          </div>
        </div>
      </div>

      <div className="px-[22px] pb-[16px] pt-[8px]">
        <SecHead>Because you played&nbsp;<em className="font-display not-italic text-ink">“Delilah”</em></SecHead>
        <div className="grid grid-cols-3 gap-[8px]">
          {d.because.map((c) => (
            <div key={c.title} className="flex flex-col gap-[6px]">
              <div className="aspect-square w-full rounded-[4px]" style={{ background: c.art }} />
              <div className="text-[11px] leading-[1.2] text-ink">{c.title}</div>
              <div className="text-[9.5px] leading-[1.2] text-ink-mute">{c.artist}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="px-[22px] pb-[16px] pt-[8px]">
        <SecHead chevron={false}>Deep cuts · from your watch history</SecHead>
        <div className="flex flex-col gap-[8px]">
          {d.deep.map((r) => (
            <div key={r.title} className="grid grid-cols-[38px_1fr] items-center gap-[12px]">
              <div className="h-[38px] w-[38px] rounded-[4px]" style={{ background: r.art }} />
              <div>
                <div className="text-[12px] leading-[1.2] text-ink">{r.title}</div>
                <div className="mt-[2px] text-[10px] text-ink-mute">{r.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PhoneScreen>
  )
}

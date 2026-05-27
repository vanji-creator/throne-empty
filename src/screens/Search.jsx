import PhoneScreen from '../components/PhoneScreen.jsx'
import { Search as SearchIcon, Play } from '../components/Icons.jsx'
import { search as d } from '../data/content.js'

function Row({ art, round, name, sub }) {
  return (
    <div className="grid grid-cols-[44px_1fr] items-center gap-[12px] py-[8px]">
      <div className={`h-[44px] w-[44px] ${round ? 'rounded-full' : 'rounded-[4px]'}`} style={{ background: round ? 'linear-gradient(135deg, #cea26e, #5c4528)' : art }} />
      <div>
        <div className="text-[13.5px] text-ink">{name}</div>
        <div className="mt-[2px] font-mono text-[9px] uppercase tracking-[0.08em] text-ink-mute">{sub}</div>
      </div>
    </div>
  )
}

function Section({ label, children }) {
  return (
    <div className="px-[22px] pt-[18px]">
      <div className="mb-[12px] font-mono text-[9.5px] uppercase tracking-[0.08em] text-ink-mute">{label}</div>
      {children}
    </div>
  )
}

export default function Search() {
  return (
    <PhoneScreen active="search">
      <div className="mx-[14px] mt-[14px] flex items-center gap-[10px] rounded-[10px] bg-[rgba(244,237,226,0.06)] px-[22px] py-[14px]">
        <span className="text-[14px] text-ink-mute"><SearchIcon /></span>
        <span className="flex flex-1 items-center font-body text-[14px] text-ink">
          {d.query}
          <span className="anim-cursor ml-[2px] inline-block h-[16px] w-[1.5px] bg-accent" />
        </span>
        <span className="font-mono text-[9.5px] uppercase tracking-[0.08em] text-accent">Cancel</span>
      </div>

      <Section label="Top Result">
        <div className="grid grid-cols-[70px_1fr_auto] items-center gap-[14px] rounded-[12px] border border-rule bg-[rgba(244,237,226,0.04)] p-[14px]">
          <div className="album-mesh h-[70px] w-[70px] rounded-[6px]" />
          <div>
            <div className="font-display text-[22px] leading-[1.05]">{d.top.title}</div>
            <div className="mt-[4px] font-mono text-[9.5px] uppercase tracking-[0.08em] text-ink-mute">{d.top.sub}</div>
          </div>
          <div className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-accent text-[18px] text-white shadow-[0_8px_18px_rgba(217,74,61,0.4)]"><Play style={{ width: '0.9em', height: '0.9em' }} /></div>
        </div>
      </Section>

      <Section label="Artists">
        {d.artists.map((a) => <Row key={a.name} {...a} />)}
      </Section>

      <Section label="Albums">
        {d.albums.map((a) => <Row key={a.name} {...a} />)}
      </Section>
    </PhoneScreen>
  )
}

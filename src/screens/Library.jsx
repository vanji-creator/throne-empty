import PhoneScreen from '../components/PhoneScreen.jsx'
import { Search, More } from '../components/Icons.jsx'
import { library as d } from '../data/content.js'

const STACK_POS = [
  { left: 0, top: 10 },
  { left: 16, top: 6 },
  { left: 32, top: 0 },
]

function Folder({ name, count, cards }) {
  return (
    <div className="rounded-[10px] border border-rule bg-[rgba(244,237,226,0.04)] px-[12px] pt-[10px] pb-[12px]">
      <div className="relative mb-[10px] h-[56px]">
        {cards.map((bg, i) => (
          <span key={i} className="absolute h-[38px] w-[38px] rounded-[4px]" style={{ background: bg, ...STACK_POS[i] }} />
        ))}
      </div>
      <div className="font-display text-[15px] leading-[1.1]">{name}</div>
      <div className="mt-[2px] font-mono text-[8.5px] uppercase tracking-[0.1em] text-ink-mute">{count}</div>
    </div>
  )
}

export default function Library() {
  return (
    <PhoneScreen active="library">
      <div className="flex items-center justify-between px-[22px] pt-[22px] pb-[14px]">
        <h4 className="font-display text-[28px] leading-none tracking-[-0.01em]">Library</h4>
        <div className="flex h-[30px] w-[30px] items-center justify-center text-[18px] text-ink-soft"><Search /></div>
      </div>

      <div className="flex flex-nowrap gap-[6px] overflow-hidden px-[22px] pb-[12px]">
        {d.tabs.map((t, i) => (
          <span key={t} className={`whitespace-nowrap rounded-full border px-[12px] py-[6px] font-mono text-[9.5px] uppercase tracking-[0.1em] ${i === 0 ? 'border-ink bg-ink text-bg' : 'border-rule text-ink-mute'}`}>{t}</span>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-[10px] px-[22px] py-[10px]">
        {d.folders.map((f) => <Folder key={f.name} {...f} />)}
      </div>

      <div className="flex flex-col pt-[14px]">
        {d.rows.map((r) => (
          <div key={r.name} className="grid grid-cols-[38px_1fr_auto] items-center gap-[12px] px-[22px] py-[8px]">
            <div className="h-[38px] w-[38px] rounded-[4px]" style={{ background: r.art }} />
            <div>
              <div className="text-[13.5px] tracking-[-0.005em] text-ink">{r.name}</div>
              <div className="mt-[2px] font-mono text-[9px] uppercase tracking-[0.08em] text-ink-mute">{r.sub}</div>
            </div>
            <div className="text-[16px] text-ink-mute"><More /></div>
          </div>
        ))}
      </div>
    </PhoneScreen>
  )
}

import PhoneScreen from '../components/PhoneScreen.jsx'
import { Back, More, Prev, Next, Play } from '../components/Icons.jsx'
import { nowPlaying as d } from '../data/content.js'

const NP_BG =
  'radial-gradient(120% 70% at 50% 0%, rgba(217,74,61,0.12) 0%, rgba(217,74,61,0) 55%), linear-gradient(180deg, #1a1714 0%, #0d0c0b 100%)'

export default function NowPlaying() {
  return (
    <PhoneScreen active="playing" background={NP_BG}>
      <div className="flex items-center justify-between px-[22px] pt-[28px] pb-[18px]">
        <span className="text-ink-soft text-[28px] leading-none w-[28px]"><Back /></span>
        <span className="font-mono text-[9.5px] uppercase tracking-[0.1em] text-ink-mute">{d.crumb}</span>
        <span className="text-ink-soft text-[22px] leading-none w-[28px] text-right inline-flex justify-end"><More /></span>
      </div>

      <div className="album-mesh relative mx-[22px] aspect-square overflow-hidden rounded-[14px] shadow-[0_20px_30px_rgba(0,0,0,0.35)]">
        <div className="album-hatch absolute inset-0 flex items-center justify-center">
          <span className="font-mono text-[9.5px] tracking-[0.2em] text-[rgba(244,237,226,0.55)]">ALBUM&nbsp;ART</span>
        </div>
      </div>

      <div className="px-[22px] pt-[18px]">
        <div className="font-display text-[22px] leading-[1.1] tracking-[-0.01em] text-balance">{d.title}</div>
        <div className="mt-[3px] text-[13px] text-ink-mute">{d.artist}</div>
      </div>

      <div className="flex flex-col gap-[6px] px-[22px] pt-[18px]">
        <div className="text-[13px] leading-[1.35] text-ink-faint">{d.lyrics.prev}</div>
        <div className="anim-lyric font-display italic text-[19px] leading-[1.2] text-accent">{d.lyrics.active}</div>
        <div className="text-[13px] leading-[1.35] text-ink-faint">{d.lyrics.next}</div>
      </div>

      <div className="px-[22px] pt-[16px]">
        <div className="relative h-[3px] overflow-hidden rounded-[2px] bg-ink-faint">
          <div className="absolute left-0 top-0 h-full rounded-[2px] bg-ink-soft" style={{ width: `${d.progress}%` }}>
            <span className="absolute right-[-4px] top-1/2 h-[9px] w-[9px] -translate-y-1/2 rounded-full bg-ink" />
          </div>
        </div>
        <div className="mt-[6px] flex justify-between font-mono text-[9.5px] tracking-[0.06em] text-ink-mute">
          <span>{d.times[0]}</span><span>{d.times[1]}</span>
        </div>
      </div>

      <div className="flex items-center justify-center gap-[28px] px-[22px] pt-[18px] pb-[16px]">
        <button className="flex h-[40px] w-[40px] items-center justify-center text-[20px] text-ink"><Prev /></button>
        <button className="flex h-[56px] w-[56px] items-center justify-center rounded-full bg-accent text-[22px] text-white shadow-[0_10px_24px_rgba(217,74,61,0.4)]"><Play style={{ width: '0.95em', height: '0.95em' }} /></button>
        <button className="flex h-[40px] w-[40px] items-center justify-center text-[20px] text-ink"><Next /></button>
      </div>
    </PhoneScreen>
  )
}

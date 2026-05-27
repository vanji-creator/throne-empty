import { Signal, Wifi, Battery } from './Icons.jsx'

// iOS status bar. `pad` lets screens match their original horizontal padding.
export default function StatusBar({ time = '9:41', className = '' }) {
  return (
    <div className={`flex items-center justify-between px-[28px] pt-[16px] text-[13.5px] font-semibold tracking-[-0.01em] ${className}`}>
      <span>{time}</span>
      <span className="inline-flex items-center gap-[6px] text-ink">
        <Signal style={{ width: '17px', height: '12px' }} />
        <Wifi style={{ width: '16px', height: '13px' }} />
        <Battery style={{ width: '25px', height: '12px' }} />
      </span>
    </div>
  )
}

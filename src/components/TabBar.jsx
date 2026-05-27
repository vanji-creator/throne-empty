import { Home, Search, Library, Playing } from './Icons.jsx'

const TABS = [
  { id: 'home', label: 'Home', Icon: Home },
  { id: 'search', label: 'Search', Icon: Search },
  { id: 'library', label: 'Library', Icon: Library },
  { id: 'playing', label: 'Playing', Icon: Playing },
]

// Shared bottom tab bar. Rendered identically by every screen via PhoneScreen,
// so its position can never drift between screens.
export default function TabBar({ active }) {
  return (
    <nav className="flex items-center justify-around px-[14px] pt-[10px] pb-[6px] border-t border-[rgba(244,237,226,0.08)] bg-[rgba(0,0,0,0.25)]">
      {TABS.map(({ id, label, Icon }) => {
        const on = id === active
        return (
          <div key={id} className={`flex flex-1 flex-col items-center gap-[4px] px-[6px] py-[4px] ${on ? 'text-accent' : 'text-ink-mute'}`}>
            <Icon style={{ fontSize: '18px', width: '18px', height: '18px' }} />
            <span className="font-mono text-[8.5px] tracking-[0.1em] uppercase">{label}</span>
          </div>
        )
      })}
    </nav>
  )
}

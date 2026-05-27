import StatusBar from './StatusBar.jsx'
import TabBar from './TabBar.jsx'
import HomeIndicator from './HomeIndicator.jsx'

// The shell every portrait screen shares. The content region is flex-1, so it
// absorbs all free space and the TabBar + HomeIndicator are ALWAYS pinned to
// the bottom — identical on every screen. (This is the structural fix for the
// old double-auto-margin bug where the tab bar floated at different heights.)
const SCREEN_BG = 'linear-gradient(180deg, #1a1714 0%, #0d0c0b 100%)'

export default function PhoneScreen({ active, background = SCREEN_BG, children }) {
  return (
    <div className="flex h-full w-full flex-col text-ink" style={{ background }}>
      <StatusBar />
      <div className="flex min-h-0 flex-1 flex-col overflow-hidden">{children}</div>
      <TabBar active={active} />
      <HomeIndicator />
    </div>
  )
}

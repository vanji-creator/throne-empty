import NowPlaying from './NowPlaying.jsx'
import Library from './Library.jsx'
import Search from './Search.jsx'
import Queue from './Queue.jsx'
import Landscape from './Landscape.jsx'
import Home from './Home.jsx'

// Registry consumed by the Redesign section, Gallery and Shot routes.
// `num` = the screen number shown in the case study; `variant` = device shape.
export const SCREENS = [
  { id: 'np',        Component: NowPlaying, variant: 'portrait',  num: '01', label: 'Now Playing' },
  { id: 'library',   Component: Library,    variant: 'portrait',  num: '02', label: 'Library' },
  { id: 'search',    Component: Search,     variant: 'portrait',  num: '03', label: 'Search' },
  { id: 'queue',     Component: Queue,      variant: 'portrait',  num: '04', label: 'Queue' },
  { id: 'landscape', Component: Landscape,  variant: 'landscape', num: '05', label: 'Landscape' },
  { id: 'home',      Component: Home,       variant: 'portrait',  num: '06', label: 'Home' },
]

export const SCREEN_BY_ID = Object.fromEntries(SCREENS.map((s) => [s.id, s]))

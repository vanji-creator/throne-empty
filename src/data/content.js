// Single source of truth for every screen's content + the art-swatch palette.

export const sw = {
  red:  'linear-gradient(135deg, #d94a3d, #7a2820)',
  blue: 'linear-gradient(135deg, #4a5a7a, #1f2738)',
  gold: 'linear-gradient(135deg, #cea26e, #5c4528)',
  green:'linear-gradient(135deg, #5a8a6a, #1f3825)',
  deepred:  'linear-gradient(135deg, #b8463a, #5a1f17)',
  deepblue: 'linear-gradient(135deg, #2a3a5a, #0f1828)',
}

export const nowPlaying = {
  crumb: 'Now Playing · Liked Songs',
  title: 'Delilah (pull me out of this)',
  artist: 'Fred again..',
  times: ['1:43', '3:52'],
  progress: 44,
  lyrics: { prev: "there's no time to be timid", active: 'pull me out of this, delilah', next: "it's just dust on a window" },
}

export const landscapeLyrics = [
  { t: "there's no time to be timid" },
  { t: 'when the world is on a hair-trigger' },
  { t: 'pull me out of this, delilah', active: true },
  { t: "it's just dust on a window" },
  { t: 'just light through the curtain' },
  { t: "and i won't be here in the morning", fade: true },
]

export const library = {
  tabs: ['All', 'Playlists', 'Albums', 'Artists', 'Songs', 'Downloads'],
  folders: [
    { name: 'Late‑night', count: '12 playlists', cards: [sw.red, sw.blue, sw.gold] },
    { name: 'Workouts', count: '8 playlists', cards: [sw.green, sw.deepred, sw.deepblue] },
  ],
  rows: [
    { art: sw.red,   name: 'Liked Songs',        sub: 'Playlist · 412 songs' },
    { art: sw.blue,  name: 'Driving / 2026',      sub: 'Playlist · 47 songs' },
    { art: sw.gold,  name: 'Songs to write to',   sub: 'Playlist · 28 songs' },
    { art: sw.green, name: 'Saturday Coffee',     sub: 'Playlist · 31 songs' },
  ],
}

export const search = {
  query: 'fred again sabrina',
  top: { title: 'Adore U', sub: 'Song · Fred again.., Obongjayar' },
  artists: [
    { round: true, name: 'Fred again..', sub: 'Artist' },
    { round: true, name: 'Sabrina Carpenter', sub: 'Artist' },
  ],
  albums: [
    { art: sw.red,  name: 'ten days',       sub: 'Album · Fred again.. · 2025' },
    { art: sw.gold, name: "Short n' Sweet", sub: 'Album · Sabrina Carpenter' },
  ],
}

export const queue = {
  title: 'Up Next',
  meta: '14 songs · 52 min',
  actions: ['Clear', 'Save as Playlist'],
  nowPlaying: { title: 'Delilah (pull me out of this)', artist: 'Fred again..' },
  rows: [
    { art: sw.gold,    title: 'Espresso',             artist: 'Sabrina Carpenter' },
    { art: sw.red,     title: 'adore u',              artist: 'Fred again.., Obongjayar' },
    { art: sw.green,   title: 'flowers on the floor', artist: 'Joy Crookes' },
    { art: sw.blue,    title: 'night feels different',artist: 'Frank Ocean' },
    { art: sw.deepred, title: 'good luck, babe!',     artist: 'Chappell Roan' },
  ],
}

export const home = {
  kicker: 'Sunday evening',
  greet: 'Welcome back.',
  avatar: 'V',
  hero: { eyebrow: 'DAILY MIX 01', title: 'Late-night sketches', sub: 'Fred again.. · Yaeji · Joy Crookes · +47' },
  because: [
    { art: sw.blue,  title: 'Salt & Sea', artist: 'Mura Masa' },
    { art: sw.red,   title: 'Marea',      artist: 'Fred again.., The Blessed Mad.' },
    { art: sw.green, title: 'Glue',       artist: 'Bicep' },
  ],
  deep: [
    { art: sw.gold,    title: 'Anchor (live at AIR Studios)', sub: 'Bon Iver · you watched this 3x' },
    { art: sw.deepred, title: 'Tiny Desk · Fred again..',  sub: 'NPR Music · 4M plays' },
  ],
}

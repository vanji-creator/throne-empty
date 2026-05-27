// Annotated critique copy for each redesign screen (ported verbatim).
// title = [plain, accentEm]; annots = [strong, rest][].
export const NOTES = {
  np: {
    num: 'Screen / 01',
    title: ['One screen. ', 'One hierarchy.'],
    crit: 'Currently the Now Playing surface looks different depending on whether you opened it from a playlist, the mini-player, or a search result. Three layouts, three sets of muscle memory.',
    annots: [
      ['Single canonical layout.', 'Album art, meta, lyrics, transport — in this order, every time. No layout drift by entry point.'],
      ['Lyrics inline, not in a tab.', 'The current line lives where the eye already is. Karaoke timing optional.'],
      ['Labels on every rail icon.', 'Liked / Lyrics / Queue / Share. No mystery glyphs.'],
    ],
    fix: 'Standardize the surface. Let the lyrics breathe. Label the actions.',
  },
  library: {
    num: 'Screen / 02',
    title: ['Flat nav. ', 'Real folders.'],
    crit: 'Today: tabs hidden behind a sheet, no folders, downloads three taps deep, search in a different surface entirely. The library punishes the user for owning a library.',
    annots: [
      ['Filter tabs visible on entry.', 'Horizontal scroll, no sheet.'],
      ['Real playlist folders.', 'Group, nest, drag. Spotify shipped this in 2017.'],
      ['Flat playlist list below.', 'Art, name, metadata, overflow. No hidden state.'],
    ],
    fix: 'Make the library behave like a library.',
  },
  search: {
    num: 'Screen / 03',
    title: ['You typed a song. ', 'Show the song.'],
    crit: 'Today: search prepends mystery results from YouTube proper, hides the song under "videos", and labels nothing. The query "fred again sabrina" returns a fan compilation before it returns the song.',
    annots: [
      ['Honest input.', 'Real cursor, real query, no autocomplete jumping the gun.'],
      ['Song is the top result.', 'Hero card. Play button is large and obvious.'],
      ['Secondary results grouped by type.', 'Artists / Albums / Videos. Mono-caps labels.'],
    ],
    fix: 'The ranking already knows. Trust it.',
  },
  queue: {
    num: 'Screen / 04',
    title: ['Reorder. ', 'First-class.'],
    crit: 'Today: drag-to-reorder hides behind an "edit" mode. Now Playing isn\'t pinned. Saving a queue requires three menus. The most-used screen during a session is the most begrudging.',
    annots: [
      ['Now Playing pinned at top.', 'Visible waveform indicator. Always anchored.'],
      ['Persistent drag handles.', 'Every row, no edit mode. Long-press still works.'],
      ['Header actions surfaced.', 'Clear / Save as Playlist / Shuffle — one tap, not buried.'],
    ],
    fix: 'Treat the queue like a thing the user owns, not a black box.',
  },
  landscape: {
    num: 'Screen / 05',
    title: ["Rotation isn't a bug. ", "It's a layout."],
    crit: 'Today: rotate the device and the app either freezes the portrait UI rotated 90 degrees or loses playback state entirely. Landscape isn\'t a state — it\'s an opportunity.',
    annots: [],
    fix: 'Landscape designed as a first-class layout. Art and transport on the left, the synced lyrics finally given the wider canvas they deserve.',
    center: true,
  },
  home: {
    num: 'Screen / 06',
    title: ['The engine, ', 'given room.'],
    crit: "Today: the home tab is dominated by promotional shelves and recently-played carousels with no narrative. The recommendation engine's actual output is buried under merchandising.",
    annots: [
      ['One daily hero.', 'A single confident pick at the top — not a wall of identical carousels.'],
      ['Explainable recs.', '"Because you played Delilah" — the rec is justified inline. The engine has reasons; let it state them.'],
      ['Watch-history mined honestly.', 'The Tiny Desk you watched three times is a stronger signal than your Discover Weekly. Surface it.'],
    ],
    fix: 'Stop selling on the home tab. Show me what the engine thinks.',
  },
}

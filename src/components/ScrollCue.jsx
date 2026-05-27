// Subtle "keep scrolling, you're not stuck" cue, shown only while a phone is
// pinned. Centered at the bottom — never near the side gutters, so it can't
// touch the page's width / padding / margins. `useImmersion` toggles `data-on`
// and writes `--cue` (0..1 progress) each scroll frame; no React re-render.
// Low opacity so it barely covers the background.
export default function ScrollCue() {
  return (
    <div
      data-scroll-cue
      data-on="false"
      className="pointer-events-none fixed bottom-[22px] left-1/2 z-[40] flex -translate-x-1/2 flex-col items-center gap-[7px] opacity-0 transition-opacity duration-500 data-[on=true]:opacity-100"
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" className="h-[15px] w-[15px] animate-bounce text-ink-mute/70" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9l6 6 6-6" />
      </svg>
      <div className="h-[3px] w-[60px] overflow-hidden rounded-full bg-[rgba(244,237,226,0.12)]">
        <div className="h-full rounded-full bg-accent/80" style={{ width: 'calc(var(--cue, 0) * 100%)' }} />
      </div>
    </div>
  )
}

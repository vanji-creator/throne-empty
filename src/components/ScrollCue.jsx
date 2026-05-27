// "Keep scrolling — not the end" cue, shown only while a phone is pinned.
// A lower-centre ring whose accent arc fills as the user scrolls through the
// pinned section, so it reads clearly as progress (there's more below) rather
// than the page ending on the first screen. `useImmersion` toggles `data-on`
// and writes `--cue` (0..1 progress) each scroll frame; no React re-render.
// A small pill label below the ring ("Keep scrolling — more below") reassures
// the user they're not stuck. Lower-centre so it never covers the phone's
// artwork. Pointer-events-none, so it can't affect page width / padding /
// margins on any viewport.
//
// r=22 → circumference = 2·π·22 ≈ 138.23. The arc is drawn with the full
// circumference as dasharray and offset back by (1 - progress)·C.
export default function ScrollCue() {
  return (
    <div
      data-scroll-cue
      data-on="false"
      className="pointer-events-none fixed bottom-[9vh] left-1/2 z-[40] flex -translate-x-1/2 flex-col items-center gap-[10px] opacity-0 transition-opacity duration-500 data-[on=true]:opacity-100"
      aria-hidden="true"
    >
      <div className="relative h-[52px] w-[52px]">
        <svg viewBox="0 0 52 52" className="h-full w-full -rotate-90">
          <circle cx="26" cy="26" r="22" fill="none" stroke="rgba(244,237,226,0.16)" strokeWidth="2" />
          <circle
            cx="26" cy="26" r="22" fill="none"
            stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round"
            strokeDasharray="138.23"
            style={{ strokeDashoffset: 'calc((1 - var(--cue, 0)) * 138.23px)' }}
          />
        </svg>
        <svg viewBox="0 0 24 24" className="absolute inset-0 m-auto h-[14px] w-[14px] animate-bounce text-ink-mute/80" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
      <span className="whitespace-nowrap rounded-full border border-rule/70 bg-bg-card/70 px-[12px] py-[5px] font-mono text-[10px] uppercase tracking-[0.14em] text-ink-soft backdrop-blur-sm">
        Keep scrolling — more below
      </span>
    </div>
  )
}

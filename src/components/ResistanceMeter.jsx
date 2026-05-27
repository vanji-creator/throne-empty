// Visible read-out for the pinned-device scroll "resistance" effect.
// Static markup only — `useImmersion` writes `--resist` (0..1), the `%` text,
// and toggles `data-on` on each scroll frame (single source of truth, no
// per-frame React re-render). Hidden until a device is pinned; never rendered
// on the export/gallery routes.
export default function ResistanceMeter() {
  return (
    <div
      data-resistance-meter
      data-on="false"
      className="group pointer-events-none fixed right-[16px] top-1/2 z-[40] hidden -translate-y-1/2 select-none flex-col items-center gap-[12px] opacity-0 transition-opacity duration-300 data-[on=true]:opacity-100 md:flex"
    >
      <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-ink-dim [writing-mode:vertical-rl]">
        Hold&nbsp;scroll
      </span>
      <div className="relative h-[120px] w-[4px] overflow-hidden rounded-full bg-rule">
        <div
          className="absolute inset-x-0 bottom-0 rounded-full bg-accent"
          style={{ height: 'calc(var(--resist, 0) * 100%)' }}
        />
      </div>
      <span data-resist-pct className="font-mono text-[10px] tabular-nums tracking-[0.06em] text-ink-mute">0%</span>
    </div>
  )
}

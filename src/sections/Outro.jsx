const META = [
  ['Designer · Engineer', 'Vikash'],
  ['Tools', 'React · Tailwind · Claude'],
  ['Purpose', 'An open letter'],
  ['To', 'The YT Music team'],
  ['Date', 'June 2026'],
]

export default function Outro() {
  return (
    <section id="outro" className="section">
      <div className="container">
        <div className="grid gap-[clamp(40px,6vw,80px)] lg:grid-cols-[1.6fr_0.9fr]">
          <div>
            <p className="eyebrow reveal">
              <span className="eyebrow__num">05</span>
              <span className="eyebrow__rule" />
              <span>Closing</span>
            </p>
            <h2 className="display display--lg reveal my-[clamp(24px,3vw,40px)]" style={{ '--delay': '80ms' }}>
              The throne is <em>sitting empty.</em>
            </h2>
            <div className="prose reveal max-w-[680px]" style={{ '--delay': '180ms' }}>
              <p>Spotify has the brand, but not the data. Apple has the catalog, but not the curation. Tidal has the audio, but not the audience. YouTube has all three and one thing none of them can buy — a watch graph trained on the entire history of how the internet listens to music. The recommendation engine that comes out of that data is, on its merits, the best in the world.</p>
              <p>What it doesn't have is a product layer worthy of it. The fixes in this letter aren't novel. They aren't risky. They are the difference between a great engine and a great experience — and they have been the difference for years.</p>
              <p><em>This case study was drawn by an engineer, not a designer.</em> Because in 2026 you don't need to wait for someone else to draw the product you want to use. You can just open a file and start.</p>
            </div>
          </div>

          <aside className="reveal" style={{ '--delay': '240ms' }}>
            <ul className="flex flex-col gap-[14px] border-t border-rule pt-[24px]">
              {META.map(([k, v]) => (
                <li key={k} className="flex flex-col gap-[3px]">
                  <span className="font-mono text-[10.5px] uppercase tracking-[0.1em] text-ink-dim">{k}</span>
                  <span className="text-[17px] text-ink">{v}</span>
                </li>
              ))}
            </ul>
            <div className="mt-[40px] text-right font-display text-[64px] italic text-accent">v.</div>
          </aside>
        </div>

        <footer className="mt-[clamp(60px,8vw,120px)] flex items-center justify-between border-t border-rule pt-[28px]">
          <span className="font-mono text-[11.5px] uppercase tracking-[0.08em] text-ink-dim">© 2026 · Throne Empty · A Case Study</span>
          <span className="font-mono text-[11.5px] uppercase tracking-[0.08em] text-ink-dim">Drawn in React</span>
        </footer>
      </div>
    </section>
  )
}

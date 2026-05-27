function Card({ num, kicker, title, em, paras, chips, inverse }) {
  return (
    <article className={`reveal rounded-[4px] border border-rule p-[clamp(24px,2.5vw,40px)] ${inverse ? 'bg-[rgba(217,74,61,0.04)]' : 'bg-bg-card'}`}>
      <div className="mb-[20px] flex items-center gap-[12px]">
        <span className="flex h-[28px] w-[28px] items-center justify-center rounded-full border border-accent font-mono text-[12px] italic text-accent">{num}</span>
        <span className="font-mono text-[11.5px] uppercase tracking-[0.1em] text-ink-mute">{kicker}</span>
      </div>
      <h3 className="display display--xs mb-[20px]">{title}<em>{em}</em></h3>
      <div className="prose">{paras.map((p, i) => <p key={i} dangerouslySetInnerHTML={{ __html: p }} />)}</div>
      <ul className="mt-[24px] flex flex-wrap gap-[8px]">
        {chips.map((c) => <li key={c} className="rounded-full border border-rule px-[12px] py-[6px] font-mono text-[10px] uppercase tracking-[0.08em] text-ink-mute">{c}</li>)}
      </ul>
    </article>
  )
}

export default function Argument() {
  return (
    <section id="argument" className="section">
      <div className="container">
        <div className="section-marker reveal">
          <span className="section-marker__num">02</span>
          <span className="section-marker__lbl">The Argument</span>
        </div>

        <p className="display display--md reveal mb-[clamp(48px,6vw,80px)] max-w-[1000px]" style={{ '--delay': '80ms' }}>
          The engine is already <em>world-class.</em> The product is in the way.
        </p>

        <div className="grid gap-[clamp(16px,2.4vw,32px)] md:grid-cols-2">
          <Card
            num="i" kicker="The Asymmetry"
            title="A data moat no " em="competitor can replicate."
            paras={[
              "Spotify trains on listens. YT Music trains on watches, lyric searches, music-video engagement, comment context, and two decades of co-occurrence on the world's largest video graph. The signal isn't comparable — it's of a different kind.",
              "The 3am cover, the gym remix, the obscure live cut a thousand viewers timestamped — all of it lives in the same recommendation surface. <em>That's the moat.</em>",
            ]}
            chips={['Watch graph', 'Lyric search', 'MV engagement', 'Comment context']}
          />
          <Card
            num="ii" kicker="The Execution Gap" inverse
            title="A product layer that " em="buries its own engine."
            paras={[
              'Layouts break on rotation. Now Playing is three different screens depending on entry point. Search foregrounds mystery results from YouTube proper. Library is nested four levels deep with no folders.',
              'Each is fixable. None requires an ML breakthrough. <em>The recommendations get through anyway</em> — just barely.',
            ]}
            chips={['Rotation', 'Now Playing parity', 'Search ranking', 'Library depth']}
          />
        </div>

        <div className="reveal mt-[clamp(40px,5vw,72px)] rounded-[4px] border border-rule bg-bg-card p-[clamp(28px,3vw,56px)]" style={{ '--delay': '320ms' }}>
          <div className="mb-[20px] flex items-center gap-[14px]">
            <span className="flex h-[40px] w-[40px] items-center justify-center rounded-full border border-accent font-mono text-[16px] italic text-accent">iii</span>
            <span className="font-mono text-[11.5px] uppercase tracking-[0.1em] text-ink-mute">The Opportunity</span>
          </div>
          <h3 className="display display--sm mb-[28px] max-w-[900px]">
            Polish gaps, not innovation gaps. Close them — <em>and the throne is yours.</em>
          </h3>
          <div className="grid gap-[clamp(20px,3vw,48px)] md:grid-cols-2">
            <p className="prose dropcap">A few hundred engineering decisions stand between YT Music's recommendation engine and the audience that already wants to use it. None of them require new research. None of them require a roadmap revolution. They require taste, ownership, and a quarter of focused product work.</p>
            <p className="prose">What follows is what that quarter could look like — six screens redrawn, six features the rest of the industry has shipped already. None of it is novel. <em>All of it is overdue.</em></p>
          </div>
        </div>
      </div>
    </section>
  )
}

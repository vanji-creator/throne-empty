import PhoneFrame from '../components/PhoneFrame.jsx'
import NowPlaying from '../screens/NowPlaying.jsx'

const META = [
  ['Subject', 'YouTube Music'],
  ['Platform', 'iOS'],
  ['Discipline', 'Product · UI'],
  ['Year', '2026'],
]

export default function Hero() {
  return (
    <section id="hero" className="relative z-[1] pb-[clamp(60px,8vw,120px)] pt-[clamp(40px,6vw,80px)]">
      <div className="container grid items-start gap-[clamp(24px,4vw,64px)] lg:grid-cols-[1.05fr_0.95fr]">
        <div className="pt-[clamp(20px,6vw,80px)]">
          <p className="eyebrow reveal">
            <span className="eyebrow__num">00</span>
            <span className="eyebrow__rule" />
            <span>A Product Redesign Case Study</span>
          </p>
          <h1 className="display display--xl reveal mt-[28px]" style={{ '--delay': '80ms' }}>
            Throne <em>Empty.</em>
          </h1>
          <p className="reveal mt-[36px] max-w-[540px] font-display text-[clamp(20px,1.9vw,27px)] leading-[1.35] text-ink-soft" style={{ '--delay': '220ms' }}>
            YouTube Music has the strongest discovery engine in the industry, sitting behind one of the most frustrating apps. A redesign in six screens — and the features that should have shipped years ago.
          </p>

          <ul className="reveal mt-[40px] grid max-w-[440px] grid-cols-2 gap-y-[16px] border-t border-rule pt-[24px]" style={{ '--delay': '480ms' }}>
            {META.map(([k, v]) => (
              <li key={k} className="flex flex-col gap-[4px]">
                <span className="font-mono text-[10.5px] uppercase tracking-[0.1em] text-ink-dim">{k}</span>
                <span className="text-[17px] text-ink">{v}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="reveal flex justify-center pt-[clamp(20px,6vw,60px)] [perspective:2200px]" style={{ '--delay': '360ms' }}>
          <PhoneFrame variant="portrait" style={{ transform: 'rotate3d(1,0.3,0,3deg) rotateY(-4deg)' }}>
            <NowPlaying />
          </PhoneFrame>
        </div>
      </div>
    </section>
  )
}

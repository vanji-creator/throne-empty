// Inline SVG icons — exact path data ported from the HTML sprite.
// `fill="none" stroke="currentColor"` comes from the .ic class; filled
// icons set their own fill/stroke so they win over the inherited values.

function Svg({ children, ...rest }) {
  return (
    <svg className="ic" viewBox="0 0 24 24" aria-hidden="true" {...rest}>
      {children}
    </svg>
  )
}

export const Home = (p) => (
  <Svg {...p}><path d="M4 11 12 4l8 7" /><path d="M6 9.5V20h12V9.5" /></Svg>
)
export const Search = (p) => (
  <Svg {...p}><circle cx="11" cy="11" r="7" /><path d="m20.5 20.5-4.2-4.2" /></Svg>
)
export const Library = (p) => (
  <Svg {...p}>
    <rect x="3" y="3" width="7" height="7" rx="1.5" />
    <rect x="14" y="3" width="7" height="7" rx="1.5" />
    <rect x="3" y="14" width="7" height="7" rx="1.5" />
    <rect x="14" y="14" width="7" height="7" rx="1.5" />
  </Svg>
)
export const Playing = (p) => (
  <Svg {...p}>
    <path d="M9 17V5l11-2v12" />
    <circle cx="6" cy="17" r="3" /><circle cx="17" cy="15" r="3" />
  </Svg>
)
export const Play = (p) => (
  <Svg {...p}><path fill="currentColor" stroke="none" d="M8 5v14l11-7z" /></Svg>
)
export const Prev = (p) => (
  <Svg {...p}><path fill="currentColor" stroke="none" d="M7 5h2.4v14H7zM20 5 9.6 12 20 19z" /></Svg>
)
export const Next = (p) => (
  <Svg {...p}><path fill="currentColor" stroke="none" d="M14.6 5H17v14h-2.4zM4 5 14.4 12 4 19z" /></Svg>
)
export const More = (p) => (
  <Svg {...p}>
    <circle cx="5" cy="12" r="1.7" fill="currentColor" stroke="none" />
    <circle cx="12" cy="12" r="1.7" fill="currentColor" stroke="none" />
    <circle cx="19" cy="12" r="1.7" fill="currentColor" stroke="none" />
  </Svg>
)
export const Back = (p) => (
  <Svg {...p}><path d="m15 4-7 8 7 8" /></Svg>
)
export const Chevron = (p) => (
  <Svg {...p}><path d="m9 5 7 7-7 7" /></Svg>
)
export const Drag = (p) => (
  <Svg {...p}>
    {[6, 12, 18].map((y) => (
      <g key={y}>
        <circle cx="9" cy={y} r="1.5" fill="currentColor" stroke="none" />
        <circle cx="15" cy={y} r="1.5" fill="currentColor" stroke="none" />
      </g>
    ))}
  </Svg>
)

/* status-bar icons — their own viewBoxes for correct aspect */
export const Signal = (p) => (
  <svg className="ic" viewBox="0 0 24 18" aria-hidden="true" {...p}>
    <path fill="currentColor" stroke="none" d="M2 14h3v4H2zM7.5 10h3v8h-3zM13 6h3v12h-3zM18.5 2h3v16h-3z" />
  </svg>
)
export const Wifi = (p) => (
  <svg className="ic" viewBox="0 0 24 20" aria-hidden="true" {...p}>
    <path d="M4 10.5a12 12 0 0 1 16 0" /><path d="M7.5 14a7 7 0 0 1 9 0" />
    <circle cx="12" cy="17.5" r="1.4" fill="currentColor" stroke="none" />
  </svg>
)
export const Battery = (p) => (
  <svg className="ic" viewBox="0 0 28 14" aria-hidden="true" {...p}>
    <rect x="1" y="2.5" width="22" height="9" rx="2.5" stroke="currentColor" fill="none" strokeWidth="1.5" />
    <rect x="2.8" y="4.3" width="14" height="5.4" rx="1.2" fill="currentColor" stroke="none" />
    <path d="M25 5.2v3.6" stroke="currentColor" strokeWidth="2.4" />
  </svg>
)

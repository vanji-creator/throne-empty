// The iPhone shell. `variant` picks portrait/landscape canonical dimensions;
// `frame="none"` drops the bezel (gallery toggle). Children render inside the
// screen. Extra className/style (e.g. .immersive transform) pass through.
const DIMS = {
  portrait: { w: 340, h: 736 },
  landscape: { w: 588, h: 272 },
}

export default function PhoneFrame({ variant = 'portrait', frame = 'full', className = '', style = {}, children }) {
  const { w, h } = DIMS[variant]
  return (
    <div
      className={`device ${variant === 'landscape' ? 'device--landscape' : ''} ${frame === 'none' ? 'device--none' : ''} ${className}`}
      style={{ '--w': `${w}px`, '--h': `${h}px`, ...style }}
    >
      <div className="device__frame">
        <div className="device__island" />
        <div className="device__screen">{children}</div>
      </div>
    </div>
  )
}

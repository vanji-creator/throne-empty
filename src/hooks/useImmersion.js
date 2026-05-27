import { useEffect } from 'react'

// Drives the pinned-device scroll effect: as each `[data-pin-root]` scrolls
// through its tall track, its `.immersive` device scales up (trapezoidal
// in/hold/out) toward filling the viewport, then back down. Ported from the
// original vanilla script. Respects prefers-reduced-motion.
const clamp01 = (n) => Math.max(0, Math.min(1, n))
const ramp = (t, a, b) => clamp01((t - a) / (b - a))
const curve = (p) => Math.min(ramp(p, 0, 0.25), 1 - ramp(p, 0.75, 1))

export default function useImmersion() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const pins = Array.from(document.querySelectorAll('[data-pin-root]'))
    if (!pins.length) return

    const recomputeBumps = () => {
      const vw = window.innerWidth || 1
      const vh = window.innerHeight || 1
      const targetW = vw * 0.92
      const targetH = vh * 0.88
      pins.forEach((pin) => {
        const device = pin.querySelector('.immersive')
        if (!device) return
        const w = device.offsetWidth || 1
        const h = device.offsetHeight || 1
        const bump = Math.max(0, Math.min(targetW / w - 1, targetH / h - 1))
        const isLand = device.classList.contains('device--landscape')
        device.style.setProperty('--max-imm-bump', (isLand ? Math.min(bump, 0.5) : bump).toFixed(3))
      })
    }

    let raf = 0
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        raf = 0
        const vh = window.innerHeight || 1
        pins.forEach((pin) => {
          const r = pin.getBoundingClientRect()
          const p = clamp01((vh - r.top) / (r.height + vh))
          const imm = curve(p)
          const device = pin.querySelector('.immersive')
          if (device) device.style.setProperty('--immersion', imm.toFixed(3))
        })
      })
    }
    let rafR = 0
    const onResize = () => {
      if (rafR) return
      rafR = requestAnimationFrame(() => { rafR = 0; recomputeBumps(); onScroll() })
    }

    recomputeBumps()
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
    }
  }, [])
}

import { useEffect } from 'react'

// Drives the pinned-device scroll effect: as each `[data-pin-root]` scrolls
// through its tall track, its `.immersive` device scales up (trapezoidal
// in/hold/out) toward filling the viewport, then back down. Ported from the
// original vanilla script. Respects prefers-reduced-motion.
const clamp01 = (n) => Math.max(0, Math.min(1, n))
const ramp = (t, a, b) => clamp01((t - a) / (b - a))
// Grow 0→0.2, hold 0.2→0.5, shrink back to scale 1 by ~0.66 — i.e. *before*
// the sticky phone releases at p≈0.667 — so it never overlaps the annotation
// notes that scroll up right after it (the desktop-only overlap).
const curve = (p) => Math.min(ramp(p, 0, 0.2), 1 - ramp(p, 0.5, 0.66))

export default function useImmersion() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const pins = Array.from(document.querySelectorAll('[data-pin-root]'))
    if (!pins.length) return

    const recomputeBumps = () => {
      const vw = window.innerWidth || 1
      const vh = window.innerHeight || 1
      const targetW = vw * 0.86
      const targetH = vh * 0.80
      pins.forEach((pin) => {
        const device = pin.querySelector('.immersive')
        if (!device) return
        const w = device.offsetWidth || 1
        const h = device.offsetHeight || 1
        const bump = Math.max(0, Math.min(targetW / w - 1, targetH / h - 1))
        const isLand = device.classList.contains('device--landscape')
        // Cap the peak so the enlarged phone stays within the viewport and
        // can't overflow into the notes. Mobile computes to ~0 already.
        device.style.setProperty('--max-imm-bump', Math.min(bump, isLand ? 0.5 : 0.2).toFixed(3))
      })
    }

    const cue = document.querySelector('[data-scroll-cue]')

    let raf = 0
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        raf = 0
        const vh = window.innerHeight || 1
        let engaged = null
        pins.forEach((pin) => {
          const r = pin.getBoundingClientRect()
          const p = clamp01((vh - r.top) / (r.height + vh))
          const imm = curve(p)
          const device = pin.querySelector('.immersive')
          if (device) device.style.setProperty('--immersion', imm.toFixed(3))
          // The device is "stuck" (resistance felt) while its sticky child holds:
          // top scrolled past the viewport top, bottom still below it.
          if (r.top <= 0 && r.bottom > vh) engaged = r
        })
        if (cue) {
          if (engaged) {
            const travel = engaged.height - vh
            const progress = travel > 0 ? clamp01(-engaged.top / travel) : 0
            cue.style.setProperty('--cue', progress.toFixed(3))
            cue.setAttribute('data-on', 'true')
          } else {
            cue.setAttribute('data-on', 'false')
          }
        }
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

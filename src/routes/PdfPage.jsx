import { Link } from 'react-router-dom'

const PDF_PATH = encodeURI('/Throne Empty — A Technical Read on YouTube Music.pdf')

export default function PdfPage() {
  return (
    <div className="min-h-screen bg-bg-deep px-[20px] py-[20px] text-ink md:px-[32px]">
      <header className="mb-[18px] flex flex-wrap items-center justify-between gap-[12px]">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-mute">Throne Empty</p>
          <h1 className="mt-[4px] text-[20px] leading-tight text-ink-soft">A Technical Read on YouTube Music</h1>
        </div>
        <nav className="flex items-center gap-[16px] font-mono text-[11px] uppercase tracking-[0.1em]">
          <Link to="/" className="text-ink-mute hover:text-accent">Back to site</Link>
          <a href={PDF_PATH} className="text-accent hover:text-ink" target="_blank" rel="noreferrer">Open PDF</a>
        </nav>
      </header>

      <iframe
        title="Throne Empty — A Technical Read on YouTube Music"
        src={PDF_PATH}
        className="h-[calc(100vh-112px)] w-full rounded-[6px] border border-rule bg-ink"
      />
    </div>
  )
}

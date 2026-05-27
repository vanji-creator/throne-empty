import { useParams } from 'react-router-dom'
import { CARD_BY_ID } from './cards.jsx'

// Renders one artboard at exact pixel size, pinned to 0,0, nothing else.
// The export script sizes the Chrome window to match and screenshots it.
export default function ShotPage() {
  const { id } = useParams()
  const card = CARD_BY_ID[id]
  if (!card) return <div style={{ color: '#fff', padding: 40 }}>Unknown shot: {id}</div>
  return (
    <div style={{ width: card.w, height: card.h, position: 'absolute', top: 0, left: 0, overflow: 'hidden' }}>
      {card.render()}
    </div>
  )
}

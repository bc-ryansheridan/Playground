import { useMemo } from 'react'
import { buildDoc } from './variants'
import './SubBrandNavigation13.css'

function SubBrandNavigation13() {
  // one design: V10 with gray card columns for the brands in the Solutions dropdown
  const doc = useMemo(() => buildDoc({ start: '' }), [])

  return (
    <div className="sbn13">
      <iframe className="sbn13-frame" title="Consolidated navigation prototype" srcDoc={doc} />
    </div>
  )
}

export default SubBrandNavigation13

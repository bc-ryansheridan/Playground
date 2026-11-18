import { useMemo } from 'react'
import { buildDoc } from './variants'
import './SubBrandNavigation12.css'

function SubBrandNavigation12() {
  // one design: V10 with gray card columns for the brands in the Solutions dropdown
  const doc = useMemo(() => buildDoc({ start: '' }), [])

  return (
    <div className="sbn12">
      <iframe className="sbn12-frame" title="Consolidated navigation prototype" srcDoc={doc} />
    </div>
  )
}

export default SubBrandNavigation12

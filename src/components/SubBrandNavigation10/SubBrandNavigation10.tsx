import { useMemo } from 'react'
import { buildDoc } from './variants'
import './SubBrandNavigation10.css'

function SubBrandNavigation10() {
  // one design: V9 with a left-aligned brand logo mark in the sub-bar (nav follows it), a de-duplicated Solutions dropdown on brand pages, and an iris Commerce logo
  const doc = useMemo(() => buildDoc({ start: '' }), [])

  return (
    <div className="sbn10">
      <iframe className="sbn10-frame" title="Consolidated navigation prototype" srcDoc={doc} />
    </div>
  )
}

export default SubBrandNavigation10

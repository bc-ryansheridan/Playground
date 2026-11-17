import { useMemo } from 'react'
import { buildDoc } from './variants'
import './SubBrandNavigation9.css'

function SubBrandNavigation9() {
  // one design (hybrid from research round 1, built on 8A): dark sub bar with "Solutions /" breadcrumb and brand mark, Industries as its own item, no Contact sales in the Commerce bar
  const doc = useMemo(() => buildDoc({ start: '' }), [])

  return (
    <div className="sbn9">
      <iframe className="sbn9-frame" title="Consolidated navigation prototype" srcDoc={doc} />
    </div>
  )
}

export default SubBrandNavigation9

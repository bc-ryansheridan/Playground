import { useMemo } from 'react'
import { buildDoc } from './variants'
import './SubBrandNavigation11.css'

function SubBrandNavigation11() {
  // one design: V10 where a brand page has a single bar (Commerce logo, breadcrumb to the brand, brand nav, brand buttons) and no Commerce links, like Adobe
  const doc = useMemo(() => buildDoc({ start: '' }), [])

  return (
    <div className="sbn11">
      <iframe className="sbn11-frame" title="Consolidated navigation prototype" srcDoc={doc} />
    </div>
  )
}

export default SubBrandNavigation11

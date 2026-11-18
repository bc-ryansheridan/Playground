import raw from './sub-brand-navigation.html?raw'

export interface Config {
  sv?: string
  bt?: number
  sl?: boolean
  nl?: string
  feats?: boolean
  start?: string
}

// Variant 11: V10 where a brand page has one bar and no Commerce links (like Adobe): Commerce logo, a breadcrumb into the brand, the brand nav and its buttons. Full-width nav, iris Commerce logo
const DEFAULT_CFG = "var CFG = {sv:'black',bt:1,sl:true,nl:'full',feats:true,start:''};"

export function buildDoc(cfg: Config) {
  const full = { sv: 'black', bt: 1, sl: true, nl: 'full', feats: true, start: '', ...cfg }
  return raw.replace(DEFAULT_CFG, `var CFG = ${JSON.stringify(full)};`)
}

import raw from './sub-brand-navigation.html?raw'

export interface Config {
  sv?: string
  bt?: number
  sl?: boolean
  nl?: string
  feats?: boolean
  start?: string
}

// Variant 13: V12 where on a sub brand the Solutions item becomes the brand name (active) and the brand bar drops its logo and switcher; brand bar is 48px. Solutions brand columns are gray cards (like the Developers column in Product Features). Full-width nav, iris Commerce logo
const DEFAULT_CFG = "var CFG = {sv:'black',bt:1,sl:true,nl:'full',feats:true,start:''};"

export function buildDoc(cfg: Config) {
  const full = { sv: 'black', bt: 1, sl: true, nl: 'full', feats: true, start: '', ...cfg }
  return raw.replace(DEFAULT_CFG, `var CFG = ${JSON.stringify(full)};`)
}

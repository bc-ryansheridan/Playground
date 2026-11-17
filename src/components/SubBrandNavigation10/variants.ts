import raw from './sub-brand-navigation.html?raw'

export interface Config {
  sv?: string
  bt?: number
  sl?: boolean
  nl?: string
  feats?: boolean
  start?: string
}

// Variant 10: V9 with changes (see styles at the end of sub-brand-navigation.html): the sub-bar is just the brand's logo mark, left aligned, with its nav following it. Full-width nav, iris Commerce logo
const DEFAULT_CFG = "var CFG = {sv:'black',bt:1,sl:true,nl:'full',feats:true,start:''};"

export function buildDoc(cfg: Config) {
  const full = { sv: 'black', bt: 1, sl: true, nl: 'full', feats: true, start: '', ...cfg }
  return raw.replace(DEFAULT_CFG, `var CFG = ${JSON.stringify(full)};`)
}

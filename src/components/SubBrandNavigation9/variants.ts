import raw from './sub-brand-navigation.html?raw'

export interface Config {
  sv?: string
  bt?: number
  sl?: boolean
  nl?: string
  feats?: boolean
  start?: string
}

// Variant 9, the hybrid built on 8A from research round 1 (see styles at the end of sub-brand-navigation.html). The single design: Black mark (sv), button layout 1 (bt), "Solutions /" prefix (sl), Full-width nav (nl)
const DEFAULT_CFG = "var CFG = {sv:'black',bt:1,sl:true,nl:'full',feats:true,start:''};"

export function buildDoc(cfg: Config) {
  const full = { sv: 'black', bt: 1, sl: true, nl: 'full', feats: true, start: '', ...cfg }
  return raw.replace(DEFAULT_CFG, `var CFG = ${JSON.stringify(full)};`)
}

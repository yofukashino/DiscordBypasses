import Types from "./types";
export default [
  {
    find: "multiaccount_cta_tooltip_seen",
    replacements: [
      {
        match: /(var \w+=)\d+(,\w+="switch-accounts-modal",\w+="multiaccount_cta_tooltip_seen")/,
        replace: (_, prefix: string, suffix: string) => `${prefix}Infinity${suffix}`,
      },
    ],
  },
  {
    find: "get isPreview",
    replacements: [
      {
        match: /(get\s*gradientPreset\s*\(\s*\)\s*{\s*return\s*(\w+))\s*}/,
        replace: (_, prefix: string, preset: string) =>
          `${prefix}=replugged?.plugins?.getExports('dev.tharki.DiscordBypasses')?._getGradientPreset(${preset})} setGradientPreset(e){${preset}=e}`,
      },
      {
        match: /(get\s*isPreview\s*\(\s*\)\s*{return\s*(\w+))\s*}/,
        replace: (_, prefix: string, orignal: string) =>
          `${prefix}=replugged?.plugins?.getExports('dev.tharki.DiscordBypasses')?._getisPreview(${orignal})}`,
      },
    ],
  },
  {
    find: "get systemPrefersColorScheme",
    replacements: [
      {
        match: /(get\s*theme\s*\(\s*\)\s*{\s*return)\s*(\w+\(\))}/,
        replace: (_, prefix: string, preset: string) =>
          `${prefix} replugged?.plugins?.getExports('dev.tharki.DiscordBypasses')?._getTheme(${preset})}`,
      },
    ],
  },
] as Types.DefaultTypes.PlaintextPatch[];

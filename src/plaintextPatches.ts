import Types from "./types";
export default [
  {
    find: "multiaccount_cta_tooltip_seen",
    replacements: [
      {
        match: /(let \w+=)\d+(,\w+="switch-accounts-modal",\w+="multiaccount_cta_tooltip_seen")/,
        replace: (_, prefix: string, suffix: string) => `${prefix}Infinity${suffix}`,
      },
    ],
  },
  {
    find: "get isPreview",
    replacements: [
      {
        match: /(get gradientPreset\(\){return (\w+))}/,
        replace: (_, prefix: string, preset: string) =>
          `${prefix}=replugged?.plugins?.getExports('dev.tharki.DiscordBypasses')?._getGradientPreset(${preset})} setGradientPreset(e){${preset}=e}`,
      },
      {
        match: /(get isPreview\(\){return (\w+))}/,
        replace: (_, prefix: string, orignal: string) =>
          `${prefix}=replugged?.plugins?.getExports('dev.tharki.DiscordBypasses')?._getIsPreview(${orignal})}`,
      },
    ],
  },
  {
    find: "get systemPrefersColorScheme",
    replacements: [
      {
        match: /(get theme\(\){return) (\w+\(\))}/,
        replace: (_, prefix: string, preset: string) =>
          `${prefix} replugged?.plugins?.getExports('dev.tharki.DiscordBypasses')?._getTheme(${preset})}`,
      },
    ],
  },
] as Types.DefaultTypes.PlaintextPatch[];

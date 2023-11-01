import Types from "./types";
export default [
  {
    find: "multiaccount_cta_tooltip_seen",
    replacements: [
      {
        match: /(var \w+=)\d+(,\w+="switch-accounts-modal",\w+="multiaccount_cta_tooltip_seen")/,
        replace: `$1Infinity$2`,
      },
    ],
  },
  {
    find: "get isPreview",
    replacements: [
      {
        match: /(get\s*gradientPreset\s*\(\s*\)\s*{\s*)return\s*(\w+)\s*}/,
        replace: `$1var bypassPreset=replugged?.plugins?.getExports('dev.tharki.DiscordBypasses')?.SettingValues?.get("gradientPreset", null);return $2=bypassPreset??$2} setGradientPreset(e){ $2=e}`,
      },
      {
        match: /(get\s*isPreview\s*\(\s*\)\s*{return\s*)(\w+)\s*}/,
        replace: `$1 $2=!$2?$2:!replugged?.plugins?.getExports('dev.tharki.DiscordBypasses')?.SettingValues?.get("clientThemes")}`,
      },
    ],
  },
  {
    find: "get systemPrefersColorScheme",
    replacements: [
      {
        match: /(get\s*theme\s*\(\s*\)\s*{\s*)return\s*(\w+\(\))}/,
        replace: `$1var bypassPreset=replugged?.plugins?.getExports('dev.tharki.DiscordBypasses')?.SettingValues?.get("gradientPreset", null); return bypassPreset ? bypassPreset?.theme : $2}`,
      },
    ],
  },
] as Types.DefaultTypes.PlaintextPatch[];

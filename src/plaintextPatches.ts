import { SettingValues } from "./index";
import { defaultSettings } from "./lib/consts";
import * as Types from "./types";
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
    find: "\\.gif($|\\?|#)",
    replacements: SettingValues.get("favIMG", defaultSettings.favIMG)
      ? [
          {
            match: "/\\.gif($|\\?|#)/i",
            replace: "/\\.(gif|png|jpe?g|webp)($|\\?|#)/i, gg = console.log('gg')",
          },
        ]
      : [],
  },
  {
    find: '"isPreview"',
    replacements: [
      {
        match: /({key:"gradientPreset",get:function\(\){)return (\w+)}}/,
        replace: `$1var bypassPreset=replugged?.plugins?.getExports('dev.tharki.DiscordBypasses')?.SettingValues?.get("gradientPreset", null);return $2=bypassPreset??$2}}, {key:"setGradientPreset",get:function(){return (e) => $2=e}}`,
      },
      {
        match: /({key:"isPreview",get:function\(\){return )(\w+)}}/,
        replace: `$1 $2=!$2?$2:!replugged?.plugins?.getExports('dev.tharki.DiscordBypasses')?.SettingValues?.get("clientThemes")}}`,
      },
    ],
  },
  {
    find: '"systemPrefersColorScheme"',
    replacements: [
      {
        match: /({key:"theme",get:function\(\){)return (\w+\(\))}}/,
        replace: `$1var bypassPreset=replugged?.plugins?.getExports('dev.tharki.DiscordBypasses')?.SettingValues?.get("gradientPreset", null); return bypassPreset ? bypassPreset?.theme : $2}}`,
      },
    ],
  },
  {
    find: ".expandedFolderIconWrapper",
    replacements: [
      {
        match: /(\(\w+\|\|\w+\))&&(\(\w+=\(0,\w+\.jsx\)\(\w+\.animated\.div)/,
        replace: `(replugged?.plugins?.getExports('dev.tharki.DiscordBypasses')?.SettingValues?.get("plainFolderIcon") || $1) && $2`,
      },
    ],
  },
] as Types.DefaultTypes.PlaintextPatch[];

import * as Types from "./types";
export default [
  {
    find: /\.getGradientAngle/,
    replacements: [
      {
        match: /({key:"isPreview",get:function\(\){return )(\w+)}}/,
        replace: `$1 $2=!replugged.plugins.getExports('Tharki.DiscordBypasses').SettingValues.get("clientThemes")}}`,
      },
    ],
  },
  {
    find: ".expandedFolderIconWrapper",
    replacements: [
      {
        match: /(\(\w+\|\|\w+\))&&(\(\w+=\(0,\w+\.jsx\)\(\w+\.animated\.div)/,
        replace: `(replugged?.plugins?.getExports('Tharki.DiscordBypasses')?.SettingValues?.get("plainFolderIcon") || $1) && $2`,
      },
    ],
  },
] as Types.DefaultTypes.PlaintextPatch[];

import Types from "./types";
export default [
  {
    find: "multiaccount_cta_tooltip_seen",
    replacements: [
      {
        match: /(let \w+=)\d+(,\w+="switch-accounts-modal",\w+="multiaccount-login-modal")/,
        replace: (_, prefix: string, suffix: string) => `${prefix}Infinity${suffix}`,
      },
    ],
  },
  {
    find: "get isPreview",
    replacements: [
      {
        match: /(get isPreview\(\){return (\w+))}/,
        replace: (_, prefix: string, orignal: string) =>
          `${prefix}=replugged?.plugins?.getExports('dev.tharki.DiscordBypasses')?._getIsPreview(${orignal})}`,
      },
    ],
  },
  {
    find: ".CUSTOM_THEMES_EDITOR_COACHMARK)",
    replacements: [
      {
        match: /=(\(0,\w+\.\w+\)\(\w+\.\w+\.TIER_2\))/g,
        replace: (_, orig: string) =>
          `=replugged?.plugins?.getExports('dev.tharki.DiscordBypasses')?._getCustomThemesEnabled(${orig})`,
      },
    ],
  },
  {
    find: ".USER_SETTINGS_PROTO(this.type)",
    replacements: [
      {
        match: /this\.ProtoClass,(\w+\.protoToSave)/g,
        replace: (_, setting: string) =>
          `this.ProtoClass,replugged?.plugins?.getExports('dev.tharki.DiscordBypasses')?._getSettingsProtoToSave(${setting})`,
      },
    ],
  },
  {
    find: "ApplicationStreamPreviewUploadManager",
    replacements: [
      {
        match: /(let (.)=)(.\.toDataURL\("image\/jpeg"\));/,
        replace: (_: string, prefix: string, preview: string, original: string) =>
          `${prefix}replugged?.plugins?.getExports('dev.tharki.DiscordBypasses')?._getStreamPreview(${original}); if (!${preview}) return;`,
      },
    ],
  },
  {
    find: "AppIconPersistedStoreState",
    replacements: [
      {
        match: /\w+\.\w+\.canUsePremiumAppIcons\(\w+\.default\.getCurrentUser\(\)\)/,
        replace: (premium) =>
          `(replugged?.plugins?.getExports('dev.tharki.DiscordBypasses')?._getAppIconsEnabled()||${premium})`,
      },
      {
        match: /get isUpsellPreview\(\){return (\w+)/,
        replace: (_, value: string) =>
          `get isUpsellPreview(){return !(replugged?.plugins?.getExports('dev.tharki.DiscordBypasses')?._getAppIconsEnabled() || !${value})`,
      },
    ],
  },
  {
    find: ".getCurrentDesktopIcon(),",
    replacements: [
      {
        match: /\w+\.\w+\.isPremium\(\w+\.default\.getCurrentUser\(\)\)/,
        replace: (premium) =>
          `(replugged?.plugins?.getExports('dev.tharki.DiscordBypasses')?._getAppIconsEnabled()||${premium})`,
      },
    ],
  },
  {
    find: "this.idleTimeout",
    replacements: [
      {
        match: /"idleTimeout",(new .{1,3}?\..{1,3}?)\)/,
        replace: (_, timeout: string) =>
          `"idleTimeout",replugged?.plugins?.getExports('dev.tharki.DiscordBypasses')?._getDiffusedTimeout(${timeout}))`,
      },
    ],
  },
  {
    find: "Playback auto paused",
    replacements: [
      {
        match: /\w+===\w+\.default\.getId\(\)/,
        replace: (suffix) =>
          `replugged?.plugins?.getExports('dev.tharki.DiscordBypasses')?._getSpotifyPauseDisabled() && ${suffix}`,
      },
    ],
  },
  {
    find: "this.nativeLoggerEnabled",
    replacements: [
      {
        match: /&&console\[/,
        replace: () =>
          `&&(replugged.plugins.getExports('dev.tharki.DiscordBypasses')?._isLoggerEnabled() ?? true)&&console[`,
      },
    ],
  },
] as Types.DefaultTypes.PlaintextPatch[];

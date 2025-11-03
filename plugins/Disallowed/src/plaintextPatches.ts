import Types from "@Types";

export const getPatches = (id?: string, all?: boolean): Types.DefaultTypes.PlaintextPatch[] =>
  [
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
            `${prefix}=replugged?.plugins?.getExports('${id}')?._getIsPreview(${orignal})}`,
        },
      ],
    },
    {
      find: ".CUSTOM_THEMES_EDITOR_COACHMARK)",
      replacements: [
        {
          match: /=(\(0,\w+\.\w+\)\(\w+\.\w+\.TIER_2\))/g,
          replace: (_, orig: string) =>
            `=replugged?.plugins?.getExports('${id}')?._getCustomThemesEnabled(${orig})`,
        },
      ],
    },
    {
      find: ".USER_SETTINGS_PROTO(this.type)",
      replacements: [
        {
          match: /this\.ProtoClass,(\w+\.protoToSave)/g,
          replace: (_, setting: string) =>
            `this.ProtoClass,replugged?.plugins?.getExports('${id}')?._getSettingsProtoToSave(${setting})`,
        },
      ],
    },
    {
      find: "ApplicationStreamPreviewUploadManager",
      replacements: [
        {
          match: /(let (.)=)(.\.toDataURL\("image\/jpeg"\));/,
          replace: (_: string, prefix: string, preview: string, original: string) =>
            `${prefix}replugged?.plugins?.getExports('${id}')?._getStreamPreview(${original}); if (!${preview}) return;`,
        },
      ],
    },
    {
      find: "AppIconPersistedStoreState",
      replacements: [
        {
          match: /\w+\.\w+\.canUsePremiumAppIcons\(\w+\.default\.getCurrentUser\(\)\)/,
          replace: (premium) =>
            `(replugged?.plugins?.getExports('${id}')?._getAppIconsEnabled()||${premium})`,
        },
        {
          match: /get isUpsellPreview\(\){return (\w+)/,
          replace: (_, value: string) =>
            `get isUpsellPreview(){return !(replugged?.plugins?.getExports('${id}')?._getAppIconsEnabled() || !${value})`,
        },
      ],
    },
    {
      find: ".getCurrentDesktopIcon(),",
      replacements: [
        {
          match: /\w+\.\w+\.isPremium\(\w+\.default\.getCurrentUser\(\)\)/,
          replace: (premium) =>
            `(replugged?.plugins?.getExports('${id}')?._getAppIconsEnabled()||${premium})`,
        },
      ],
    },
    all && {
      find: "this.idleTimeout",
      replacements: [
        {
          match: /"idleTimeout",(new .{1,3}?\..{1,3}?)\)/,
          replace: (_, timeout: string) =>
            `"idleTimeout",replugged?.plugins?.getExports('${id}')?._getDiffusedTimeout(${timeout}))`,
        },
        {
          match: /this\.idleTimeout\./g,
          replace: (_) => `this.idleTimeout?.`,
        },
      ],
    },
    {
      find: "Playback auto paused",
      replacements: [
        {
          match: /\w+===\w+\.default\.getId\(\)/,
          replace: (suffix) =>
            `replugged?.plugins?.getExports('${id}')?._getSpotifyPauseDisabled() && ${suffix}`,
        },
      ],
    },
    {
      find: "this.nativeLoggerEnabled",
      replacements: [
        {
          match: /&&console\[/,
          replace: () =>
            `&&(replugged.plugins.getExports('${id}')?._isLoggerEnabled() ?? true)&&console[`,
        },
      ],
    },
    {
      find: "Stream Tile",
      replacements: [
        {
          match: /\i\.\i\.isFocused\(\)/,
          replace: (focused) =>
            `replugged.plugins.getExports('${id}')?._isStreamPlaying(${focused})`,
        },
      ],
    },
    {
      find: "get streamerPaused",
      replacements: [
        {
          match: /isMainWindowFocused:(\i\.\i\.isFocused\(\))/,
          replace: (_, focused) =>
            `isMainWindowFocused:replugged.plugins.getExports('${id}')?._isStreamPlaying(${focused})`,
        },
      ],
    },
  ].filter(Boolean);

export default getPatches("dev.tharki.DiscordBypasses", true);

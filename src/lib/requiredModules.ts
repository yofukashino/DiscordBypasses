import { webpack } from "replugged";
import Types from "../types";
export const Modules: Types.Modules = {};

Modules.loadModules = async (): Promise<void> => {
  Modules.PermissionStore ??= webpack.getByStoreName<Types.PermissionStore>("PermissionStore");
  Modules.ApplicationStreamPreviewStore ??=
    webpack.getByStoreName<Types.ApplicationStreamPreviewStore>("ApplicationStreamPreviewStore");
  Modules.ClientThemesBackgroundStore ??= webpack.getByStoreName<Types.ClientThemesBackgroundStore>(
    "ClientThemesBackgroundStore",
  );
  Modules.IdleStore ??= webpack.getByStoreName<Types.IdleStore>("IdleStore");
  Modules.TimeoutManager ??= await webpack.waitForProps<Types.TimeoutManager>(
    "Timeout",
    "DelayedCall",
  );
  Modules.DiscordConstants ??= await webpack.waitForProps<Types.DiscordConstants>(
    "VerificationCriteria",
  );
  Modules.AccountSwitcherStrings ??= await webpack.waitForProps<{ MAX_ACCOUNTS: number }>(
    "MAX_ACCOUNTS",
  );
  Modules.ElectronModule ??= await webpack.waitForProps<Types.ElectronModule>("setBadge");
  Modules.SpotifyProtocoalStore ??= await webpack.waitForProps<Types.SpotifyProtocoalStore>(
    "getProfile",
    "SpotifyAPI",
  );
  Modules.SpotifyChecks ??= await webpack.waitForProps<Types.SpotifyChecks>(
    "isSpotifyPremium",
    "ensureSpotifyPremium",
  );
  Modules.ImageConstructor ??= await webpack.waitForProps<Types.ImageConstructor>("IMAGE_GIF_RE");
  Modules.ClientThemeUpdate ??= await webpack.waitForProps<{
    saveClientTheme: Types.DefaultTypes.AnyFunction;
  }>("saveClientTheme");
  Modules.GradientPresets ??= await webpack.waitForProps<{
    BACKGROUND_GRADIENT_PRESETS_MAP: Record<string, string>;
  }>("BACKGROUND_GRADIENT_PRESETS_MAP");
  Modules.FolderConstructor ??= await webpack
    .waitForModule<Types.GenericExport>(
      webpack.filters.bySource(".Messages.GUILD_FOLDER_TOOLTIP_A11Y_LABEL"),
      {
        raw: true,
      },
    )
    .then(({ exports }) => exports);
  Modules.ImageInput ??= await webpack.waitForProps<{
    default: React.ComponentClass<{ onChange: (...args: unknown[]) => void }>;
    processImage: Types.DefaultTypes.AnyFunction;
  }>("processImage");
  Modules.AudioResolverPromise ??= webpack.waitForModule<{
    exports: Types.DefaultTypes.AnyFunction;
  }>(webpack.filters.bySource("./mute.mp3"), { raw: true });
  Modules.SpamUtils ??= await webpack.waitForProps<Types.SpamUtils>("isSpam", "isSpamSupported");
};

export default Modules;

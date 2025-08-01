import { webpack } from "replugged";
import Types from "../types";
export const Modules: Types.Modules = {};

Modules.loadModules = async (): Promise<void> => {
  Modules.DiscordConstants ??= await webpack
    .waitForModule<Types.GenericModule>(webpack.filters.bySource(".MFA_WARNING="), {
      timeout: 10000,
    })
    .catch(() => {
      throw new Error("Failed To Find DiscordConstants Module");
    });
  Modules.HashMap = await webpack
    .waitForProps<Types.GenericModule>(["runtimeHashMessageKey"], {
      timeout: 10000,
    })
    .then(({ runtimeHashMessageKey }) => {
      return new Proxy(
        {},
        {
          get(_, prop) {
            return prop === "runtimeHashMessageKey"
              ? runtimeHashMessageKey
              : runtimeHashMessageKey(prop);
          },
        },
      );
    })
    .catch(() => {
      throw new Error("Failed To Find HashMap Module");
    });

  Modules.TimeoutManager ??= await webpack
    .waitForModule<Types.GenericModule>(webpack.filters.bySource("this._timeout.isStarted()"), {
      timeout: 10000,
    })
    .catch(() => {
      throw new Error("Failed To Find TimeoutManager Module");
    });

  Modules.AccountSwitcherStrings ??= await webpack
    .waitForModule<Types.GenericModule>(webpack.filters.bySource("multiaccount_cta_tooltip_seen"), {
      timeout: 10000,
    })
    .catch(() => {
      throw new Error("Failed To Find AccountSwitcherStrings Module");
    });

  Modules.ElectronModule ??= await webpack
    .waitForProps<Types.ElectronModule>(["setBadge"], {
      timeout: 10000,
    })
    .catch(() => {
      throw new Error("Failed To Find Electron Module");
    });

  Modules.SpotifyProtocoalStore ??= await webpack
    .waitForModule<Types.GenericModule>(webpack.filters.bySource('type:"SPOTIFY_PROFILE_UPDATE"'), {
      timeout: 10000,
    })
    .catch(() => {
      throw new Error("Failed To Find SpotifyProtocalStore Module");
    });
  Modules.SpotifyChecks ??= await webpack
    .waitForModule<Types.GenericModule>(
      webpack.filters.bySource("spotify account is not premium"),
      {
        timeout: 10000,
      },
    )
    .catch(() => {
      throw new Error("Failed To Find SpotifyChecks Module");
    });

  Modules.ImageConstructor ??= await webpack
    .waitForModule<Types.GenericModule & Record<string, RegExp>>(
      webpack.filters.bySource("/\\.gif($|\\?|#)/i"),
      {
        timeout: 10000,
      },
    )
    .catch(() => {
      throw new Error("Failed To Find ImageConstructor Module");
    });

  Modules.PreloadedUserSettings ??= await webpack
    .waitForModule<Types.SettingsPreload>(webpack.filters.bySource("PreloadedUserSettings"), {
      timeout: 10000,
    })
    .then((mod) => Object.values(mod).find((v) => v?.typeName?.endsWith?.("PreloadedUserSettings")))
    .catch(() => {
      throw new Error("Failed To Find PreloadedUserSettings Module");
    });

  Modules.FolderConstructor ??= await webpack
    .waitForModule<Types.GenericExport>(webpack.filters.bySource(".folderIconWrapper"), {
      raw: true,
      timeout: 10000,
    })
    .then(({ exports }) => exports)
    .catch(() => {
      throw new Error("Failed To Find FolderConstructorModule");
    });

  Modules.ImageInput ??= await webpack
    .waitForModule<Types.GenericModule>(webpack.filters.bySource("maxFileSizeBytes:1/0"), {
      timeout: 10000,
    })
    .catch(() => {
      throw new Error("Failed To Find ImageInput Module");
    });

  Modules.AudioResolverPromise ??= webpack.waitForModule<{
    exports: Types.DefaultTypes.AnyFunction;
  }>(webpack.filters.bySource("./mute.mp3"), { raw: true });

  Modules.SpamUtils ??= await webpack
    .waitForModule<Types.GenericModule>(webpack.filters.bySource(/return .\(.\.author\.id\)/), {
      timeout: 10000,
    })
    .catch(() => {
      throw new Error("Failed To Find SpamUtils Module");
    });

  Modules.VoiceMessage ??= await webpack
    .waitForModule<Types.GenericMemo>(webpack.filters.bySource("waveform,waveform"), {
      timeout: 10000,
    })
    .catch(() => {
      throw new Error("Failed To Find VoiceMessage Module");
    });

  Modules.DownloadButton ??= await webpack
    .waitForModule<Types.DownloadButton>(
      webpack.filters.bySource(".MEDIA_DOWNLOAD_BUTTON_TAPPED,"),
      {
        timeout: 10000,
      },
    )
    .catch(() => {
      throw new Error("Failed To Find DownloadButton Module");
    });
  Modules.UserSettingsProtoStore ??=
    webpack.getByStoreName<Types.UserSettingsProtoStore>("UserSettingsProtoStore");
  Modules.PermissionStore ??= webpack.getByStoreName<Types.PermissionStore>("PermissionStore");
  Modules.ClientThemesBackgroundStore ??= webpack.getByStoreName<Types.ClientThemesBackgroundStore>(
    "ClientThemesBackgroundStore",
  );
  Modules.IdleStore ??= webpack.getByStoreName<Types.IdleStore>("IdleStore");
  Modules.ApplicationStreamPreviewStore ??=
    webpack.getByStoreName<Types.ApplicationStreamPreviewStore>("ApplicationStreamPreviewStore");
};

export default Modules;

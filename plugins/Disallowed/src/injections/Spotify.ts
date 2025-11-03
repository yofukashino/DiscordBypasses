import { webpack } from "replugged";
import { fluxDispatcher } from "replugged/common";
import { PluginInjector, SettingValues } from "@this";
import { DefaultSettings } from "@consts";
import { SpotifyAccountUtils, SpotifyProtocoalUtils } from "@lib/RequiredModules";

const updateProfile = webpack.getFunctionKeyBySource(
  SpotifyProtocoalUtils,
  'type:"SPOTIFY_PROFILE_UPDATE"',
);

PluginInjector.instead(SpotifyProtocoalUtils, updateProfile, (args, res) =>
  SettingValues.get("spotifyPremium", DefaultSettings.spotifyPremium)
    ? fluxDispatcher.dispatch({
        type: "SPOTIFY_PROFILE_UPDATE",
        accountId: args[0],
        isPremium: true,
      })
    : res(...args),
);

const isSpotifyPremium = webpack.getFunctionKeyBySource(
  SpotifyAccountUtils,
  /return \w+\.isPremium}/,
);

PluginInjector.after(
  SpotifyAccountUtils,
  isSpotifyPremium,
  (_args, res) => SettingValues.get("spotifyPremium", DefaultSettings.spotifyPremium) || res,
);

const ensureSpotifyPremium = webpack.getFunctionKeyBySource(
  SpotifyAccountUtils,
  "spotify account is not premium",
);

PluginInjector.instead(SpotifyAccountUtils, ensureSpotifyPremium, (args, res) =>
  SettingValues.get("spotifyPremium", DefaultSettings.spotifyPremium)
    ? new Promise((resolve) => resolve(true))
    : res(...args),
);

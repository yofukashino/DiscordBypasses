import { common } from "replugged";
import { PluginInjector, SettingValues } from "../index";
import { defaultSettings } from "../lib/consts";
import { SpotifyChecks, SpotifyProtocoalStore } from "../lib/requiredModules";
const { fluxDispatcher: FluxDispatcher } = common;
export default (): void => {
  PluginInjector.instead(SpotifyProtocoalStore, "getProfile", (args, res) =>
    SettingValues.get("spotifyPremium", defaultSettings.spotifyPremium)
      ? FluxDispatcher.dispatch({
          type: "SPOTIFY_PROFILE_UPDATE",
          accountId: args[0],
          isPremium: true,
        })
      : res(...args),
  );
  PluginInjector.after(
    SpotifyChecks,
    "isSpotifyPremium",
    (_args, res) => SettingValues.get("spotifyPremium", defaultSettings.spotifyPremium) || res,
  );
  PluginInjector.instead(SpotifyChecks, "ensureSpotifyPremium", (args, res) =>
    SettingValues.get("spotifyPremium", defaultSettings.spotifyPremium)
      ? new Promise((resolve) => resolve(true))
      : res(...args),
  );
};

import { webpack } from "replugged";
import { fluxDispatcher as FluxDispatcher } from "replugged/common";
import { PluginInjector, SettingValues } from "../index";
import { defaultSettings } from "../lib/consts";
import Modules from "../lib/requiredModules";

export default (): void => {
  const { SpotifyChecks, SpotifyProtocoalStore } = Modules;

  const getProfile = webpack.getFunctionKeyBySource(
    SpotifyProtocoalStore,
    'type:"SPOTIFY_PROFILE_UPDATE"',
  );

  PluginInjector.instead(SpotifyProtocoalStore, getProfile, (args, res) =>
    SettingValues.get("spotifyPremium", defaultSettings.spotifyPremium)
      ? FluxDispatcher.dispatch({
          type: "SPOTIFY_PROFILE_UPDATE",
          accountId: args[0],
          isPremium: true,
        })
      : res(...args),
  );

  const isSpotifyPremium = webpack.getFunctionKeyBySource(SpotifyChecks, /return \w+\.isPremium}/);

  PluginInjector.after(
    SpotifyChecks,
    isSpotifyPremium,
    (_args, res) => SettingValues.get("spotifyPremium", defaultSettings.spotifyPremium) || res,
  );

  const ensureSpotifyPremium = webpack.getFunctionKeyBySource(
    SpotifyChecks,
    "spotify account is not premium",
  );

  PluginInjector.instead(SpotifyChecks, ensureSpotifyPremium, (args, res) =>
    SettingValues.get("spotifyPremium", defaultSettings.spotifyPremium)
      ? new Promise((resolve) => resolve(true))
      : res(...args),
  );
};

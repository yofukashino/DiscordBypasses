import { common, webpack } from "replugged";
import { PluginInjector, SettingValues } from "../index";
import { defaultSettings } from "../lib/consts";
import { SpotifyPremiumCheck, SpotifyProtocoalStore } from "../lib/requiredModules";
const { fluxDispatcher: FluxDispatcher } = common;
export const patchSpotifyPremium = (): void => {
  const ProfileUpdate = webpack.getFunctionKeyBySource(
    SpotifyProtocoalStore,
    /"SPOTIFY_PROFILE_UPDATE"/,
  ) as unknown as string;
  PluginInjector.instead(SpotifyProtocoalStore, ProfileUpdate, (args, res) =>
    SettingValues.get("spotifyPremium", defaultSettings.spotifyPremium)
      ? FluxDispatcher.dispatch({
          type: "SPOTIFY_PROFILE_UPDATE",
          accountId: args[0],
          isPremium: true,
        })
      : res(...args),
  );
  const isPremium = webpack.getFunctionKeyBySource(
    SpotifyPremiumCheck,
    /\.socket\.isPremium/,
  ) as unknown as string;
  PluginInjector.instead(
    SpotifyPremiumCheck,
    isPremium,
    (args, res) =>
      SettingValues.get("spotifyPremium", defaultSettings.spotifyPremium) || res(...args),
  );
  const isPremiumPromise = webpack.getFunctionKeyBySource(
    SpotifyPremiumCheck,
    /Promise\.reject.*"spotify account is not premium"/,
  ) as unknown as string;
  PluginInjector.instead(SpotifyPremiumCheck, isPremiumPromise, (args, res) =>
    SettingValues.get("spotifyPremium", defaultSettings.spotifyPremium)
      ? new Promise((resolve) => resolve(true))
      : res(...args),
  );
};

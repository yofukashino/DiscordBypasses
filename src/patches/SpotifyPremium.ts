import { common, webpack } from "replugged";
import { PluginInjector, SettingValues } from "../index";
import { defaultSettings } from "../lib/consts";
import { SpotifyPremiumCheck, SpotifyProtocoalStore } from "../lib/requiredModules";
const { fluxDispatcher: FluxDispatcher } = common;
export const patchSpotifyPremium = (): void => {
  if (!SettingValues.get("spotifyPremium", defaultSettings.spotifyPremium)) return;
  const ProfileUpdate = webpack.getFunctionKeyBySource(
    SpotifyProtocoalStore,
    /"SPOTIFY_PROFILE_UPDATE"/,
  ) as unknown as string;
  PluginInjector.instead(SpotifyProtocoalStore, ProfileUpdate, ([id]) => {
    FluxDispatcher.dispatch({
      type: "SPOTIFY_PROFILE_UPDATE",
      accountId: id,
      isPremium: true,
    });
  });
  const isPremium = webpack.getFunctionKeyBySource(
    SpotifyPremiumCheck,
    /\.socket\.isPremium/,
  ) as unknown as string;
  PluginInjector.instead(SpotifyPremiumCheck, isPremium, () => true);
  const isPremiumPromise = webpack.getFunctionKeyBySource(
    SpotifyPremiumCheck,
    /Promise\.reject.*"spotify account is not premium"/,
  ) as unknown as string;
  PluginInjector.instead(
    SpotifyPremiumCheck,
    isPremiumPromise,
    () => new Promise((resolve) => resolve(true)),
  );
};

import { webpack } from "replugged";
import { PluginInjector, SettingValues } from "../index";
import { defaultSettings } from "../lib/consts";
import { SpotifyProtocoalStore } from "../lib/requiredModules";
export const patchSpotifyPause = (): void => {
  if (!SettingValues.get("spotifyPause", defaultSettings.spotifyPause)) return;
  const pause = webpack.getFunctionKeyBySource(
    SpotifyProtocoalStore,
    /"SPOTIFY_PLAYER_PAUSE"/,
  ) as unknown as string;
  PluginInjector.instead(SpotifyProtocoalStore, pause, () => null);
};

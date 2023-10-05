import { PluginInjector, SettingValues } from "../index";
import { defaultSettings } from "../lib/consts";
import { Timeout } from "../lib/requiredModules";
export const patchTimeouts = (): void => {
  PluginInjector.instead(
    Timeout.prototype,
    "start",
    (args: [string | number, string], res, instance: { start: () => void; stop: () => void }) => {
      if (
        (args[1]?.toString().includes("BOT_CALL_IDLE_DISCONNECT") &&
          SettingValues.get("bandwidth", defaultSettings.bandwidth)) ||
        (args[1]?.toString().includes("SPOTIFY_AUTO_PAUSED") &&
          SettingValues.get("bandwidth", defaultSettings.spotifyPause))
      ) {
        instance.start = () => null;
        instance.stop();
        return null;
      }
      return res.call(instance, ...args);
    },
  );
};

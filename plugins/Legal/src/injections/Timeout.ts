import { webpack } from "replugged";
import { PluginInjector, SettingValues } from "../index";
import { defaultSettings } from "../lib/consts";
import Modules from "../lib/requiredModules";
import Types from "../types";
export default (): void => {
  const { TimeoutManager } = Modules;

  const Timeout = webpack.getFunctionBySource<Types.DefaultTypes.AnyFunction>(
    TimeoutManager,
    "window.setTimeout",
  );

  PluginInjector.instead(
    Timeout.prototype,
    "start",
    (args: [string | number, string], res, instance: { start: () => void; stop: () => void }) => {
      if (
        args[1]?.toString().includes("SPOTIFY_AUTO_PAUSED") &&
        SettingValues.get("spotifyPause", defaultSettings.spotifyPause)
      ) {
        instance.start = () => null;
        instance.stop();
        return null;
      }
      return res.call(instance, ...args);
    },
  );

  const Interval = webpack.getFunctionBySource<Types.DefaultTypes.AnyFunction>(
    TimeoutManager,
    "window.setInterval",
  );

  PluginInjector.instead(
    Interval.prototype,
    "start",
    (args: [string | number, string], res, instance: { start: () => void; stop: () => void }) => {
      if (
        args[1]?.toString().includes("SPOTIFY_AUTO_PAUSED") &&
        SettingValues.get("spotifyPause", defaultSettings.spotifyPause)
      ) {
        instance.start = () => null;
        instance.stop();
        return null;
      }
      return res.call(instance, ...args);
    },
  );
};

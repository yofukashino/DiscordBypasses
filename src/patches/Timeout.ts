import { PluginInjector, SettingValues } from "../index";
import { defaultSettings } from "../lib/consts";
import { Timeout } from "../lib/requiredModules";
export const patchTimeouts = (): void => {
  PluginInjector.instead(Timeout.prototype, "start", (args: [string, string], res, instance) => {
    if (
      args[1]?.toString().includes("BOT_CALL_IDLE_DISCONNECT") &&
      SettingValues.get("bandwidth", defaultSettings.bandwidth)
    )
      return null;
    return res.call(instance, ...args);
  });
};

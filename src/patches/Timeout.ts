import { PluginInjector, SettingValues } from "../index";
import { defaultSettings } from "../lib/consts";
import { Timeout } from "../lib/requiredModules";
import * as Types from "../types";
export const patchTimeouts = (): void => {
  PluginInjector.after(Timeout.prototype, "start", ([_, args]: [string, string], res, instance) => {
    if (
      args?.toString().includes("BOT_CALL_IDLE_DISCONNECT") &&
      SettingValues.get("bandwidth", defaultSettings.bandwidth)
    ) {
      const { stop } = instance as unknown as Types.TimeoutPrototype;
      return stop.apply(instance);
    }
    return res;
  });
};

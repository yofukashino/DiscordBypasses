import { PluginInjector, SettingValues } from "../index";
import { defaultSettings } from "../lib/consts";
import { CurrentUserIdle } from "../lib/requiredModules";
export const patchIdle = (): void => {
  if (!SettingValues.get("noAFK", defaultSettings.noAFK)) return;
  PluginInjector.instead(CurrentUserIdle, "getIdleSince", () => null);
  PluginInjector.instead(CurrentUserIdle, "isIdle", () => false);
  PluginInjector.instead(CurrentUserIdle, "isAFK", () => false);
};

import { PluginInjector, SettingValues } from "../index";
import { defaultSettings } from "../lib/consts";
import { CurrentUserIdle } from "../lib/requiredModules";
export const patchIdle = (): void => {
  PluginInjector.instead(CurrentUserIdle, "getIdleSince", (args, res) =>
    SettingValues.get("clientThemes", defaultSettings.clientThemes) ? null : res(...args),
  );
  PluginInjector.instead(CurrentUserIdle, "isIdle", (args, res) =>
    SettingValues.get("clientThemes", defaultSettings.clientThemes) ? false : res(...args),
  );
  PluginInjector.instead(CurrentUserIdle, "isAFK", (args, res) =>
    SettingValues.get("clientThemes", defaultSettings.clientThemes) ? false : res(...args),
  );
};

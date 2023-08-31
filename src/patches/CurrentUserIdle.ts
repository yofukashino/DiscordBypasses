import { PluginInjector, SettingValues } from "../index";
import { defaultSettings } from "../lib/consts";
import { CurrentUserIdle } from "../lib/requiredModules";
export const patchIdle = (): void => {
  PluginInjector.instead(CurrentUserIdle, "getIdleSince", (args, res) =>
    SettingValues.get("noAFK", defaultSettings.noAFK) ? null : res(...args),
  );
  PluginInjector.instead(CurrentUserIdle, "isIdle", (args, res) =>
    SettingValues.get("noAFK", defaultSettings.noAFK) ? false : res(...args),
  );
  PluginInjector.instead(CurrentUserIdle, "isAFK", (args, res) =>
    SettingValues.get("noAFK", defaultSettings.noAFK) ? false : res(...args),
  );
};

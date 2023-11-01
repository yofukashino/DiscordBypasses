import { PluginInjector, SettingValues } from "../index";
import { defaultSettings } from "../lib/consts";
import { IdleStore } from "../lib/requiredModules";
export default (): void => {
  PluginInjector.instead(IdleStore, "getIdleSince", (args, res) =>
    SettingValues.get("noAFK", defaultSettings.noAFK) ? null : res(...args),
  );
  PluginInjector.instead(IdleStore, "isIdle", (args, res) =>
    SettingValues.get("noAFK", defaultSettings.noAFK) ? false : res(...args),
  );
  PluginInjector.instead(IdleStore, "isAFK", (args, res) =>
    SettingValues.get("noAFK", defaultSettings.noAFK) ? false : res(...args),
  );
};

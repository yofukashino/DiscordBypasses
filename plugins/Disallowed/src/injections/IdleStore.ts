import { PluginInjector, SettingValues } from "@this";
import { DefaultSettings } from "@consts";
import { IdleStore } from "@lib/RequiredModules";

PluginInjector.instead(IdleStore, "getIdleSince", (args, res) =>
  SettingValues.get("noAFK", DefaultSettings.noAFK) ? null : res(...args),
);
PluginInjector.instead(IdleStore, "isIdle", (args, res) =>
  SettingValues.get("noAFK", DefaultSettings.noAFK) ? false : res(...args),
);
PluginInjector.instead(IdleStore, "isAFK", (args, res) =>
  SettingValues.get("noAFK", DefaultSettings.noAFK) ? false : res(...args),
);

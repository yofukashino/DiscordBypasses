import { PluginInjector, SettingValues } from "../index";
import { defaultSettings } from "../lib/consts";
import { ElectronModule } from "../lib/requiredModules";
export const patchBadges = (): void => {
  if (!SettingValues.get("setBadge", defaultSettings.setBadge)) return;
  ElectronModule.setBadge(0);
  PluginInjector.before(ElectronModule, "setBadge", (args) => {
    if (SettingValues.get("setBadge", defaultSettings.setBadge)) args[0] = 0;
    return args;
  });
  ElectronModule.setSystemTrayIcon("DEFAULT");
  PluginInjector.before(ElectronModule, "setSystemTrayIcon", (args) => {
    if (SettingValues.get("setBadge", defaultSettings.setBadge) && args[0] === "UNREAD")
      args[0] = "DEFAULT";
    return args;
  });
};

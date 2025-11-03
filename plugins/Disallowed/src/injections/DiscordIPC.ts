import { PluginInjector, SettingValues } from "@this";
import { DefaultSettings } from "@consts";
import { DiscordIPC } from "@lib/RequiredModules";

if (SettingValues.get("setBadge", DefaultSettings.setBadge)) {
  DiscordIPC.setBadge(0);
  DiscordIPC.setSystemTrayIcon("DEFAULT");
}

PluginInjector.before(DiscordIPC, "setBadge", (args) => {
  if (SettingValues.get("setBadge", DefaultSettings.setBadge)) args[0] = 0;
  return args;
});

PluginInjector.before(DiscordIPC, "setSystemTrayIcon", (args) => {
  if (SettingValues.get("setBadge", DefaultSettings.setBadge) && args[0] === "UNREAD")
    args[0] = "DEFAULT";

  return args;
});

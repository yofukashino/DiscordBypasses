import { PluginInjector, SettingValues } from "@this";
import { DefaultSettings } from "@consts";
import { PreloadedUserSettings, UserSettingsProtoStore } from "@lib/RequiredModules";

PluginInjector.after(PreloadedUserSettings, "internalBinaryRead", (_args, res) => {
  if (res.appearance && SettingValues.get("clientThemes", DefaultSettings.clientThemes))
    res.appearance.clientThemeSettings =
      UserSettingsProtoStore.settings?.appearance?.clientThemeSettings ??
      SettingValues.get("clientThemeSettings", DefaultSettings.clientThemeSettings);

  return res;
});

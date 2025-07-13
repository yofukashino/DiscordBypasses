import { PluginInjector, SettingValues } from "..";
import { defaultSettings } from "../lib/consts";
import Modules from "../lib/requiredModules";

export default (): void => {
  const { PreloadedUserSettings, UserSettingsProtoStore } = Modules;

  PluginInjector.after(
    PreloadedUserSettings,
    "internalBinaryRead",
    (
      _args,
      res: {
        appearance: { clientThemeSettings: Record<string, unknown> };
      },
    ) => {
      if (res.appearance && SettingValues.get("clientThemes", defaultSettings.clientThemes))
        res.appearance.clientThemeSettings =
          UserSettingsProtoStore.settings.appearance.clientThemeSettings ??
          SettingValues.get("clientThemeSettings", defaultSettings.clientThemeSettings);
      return res;
    },
  );
};

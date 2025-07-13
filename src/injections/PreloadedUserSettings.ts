import { PluginInjector } from "..";
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
      if (res.appearance)
        res.appearance.clientThemeSettings =
          UserSettingsProtoStore.settings.appearance.clientThemeSettings;

      return res;
    },
  );
};

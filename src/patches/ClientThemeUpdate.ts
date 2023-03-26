import { webpack } from "replugged";
import { PluginInjector, SettingValues } from "../index";
import { defaultSettings } from "../lib/consts";
import { ClientThemeUpdate } from "../lib/requiredModules";
export const patchClientThemeUpdate = (): void => {
  const updateTheme = webpack.getFunctionKeyBySource<string>(
    ClientThemeUpdate,
    "backgroundGradientPresetId",
  );
  PluginInjector.instead(ClientThemeUpdate, updateTheme, (args, res) =>
    SettingValues.get("clientThemes", defaultSettings.clientThemes) ? null : res(...args),
  );
};

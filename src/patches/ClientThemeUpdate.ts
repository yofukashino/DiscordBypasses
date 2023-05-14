import { webpack } from "replugged";
import { PluginInjector, SettingValues } from "../index";
import { defaultSettings } from "../lib/consts";
import {
  ClientThemeUpdate,
  ClientThemesBackgroundStore,
  GradientPresets,
} from "../lib/requiredModules";
export const patchClientThemeUpdate = (): void => {
  const updateTheme = webpack.getFunctionKeyBySource<string>(
    ClientThemeUpdate,
    "backgroundGradientPresetId",
  );
  PluginInjector.instead(ClientThemeUpdate, updateTheme, (args, res) => {
    const gradientPreset = GradientPresets[args[0].backgroundGradientPresetId];
    if (!gradientPreset || !SettingValues.get("clientThemes", defaultSettings.clientThemes)) {
      SettingValues.delete("gradientPreset");
      ClientThemesBackgroundStore.setGradientPreset(
        SettingValues.get("gradientPreset", defaultSettings.gradientPreset),
      );
      return res(...args);
    }
    const gradientPresetStrinified = JSON.stringify(gradientPreset);
    SettingValues.set("gradientPreset", JSON.parse(gradientPresetStrinified));
    return null;
  });
};

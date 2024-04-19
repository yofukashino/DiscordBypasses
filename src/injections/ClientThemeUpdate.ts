import { PluginInjector, SettingValues } from "../index";
import { defaultSettings } from "../lib/consts";
import Modules from "../lib/requiredModules";
export default (): void => {
  const { ClientThemeUpdate, ClientThemesBackgroundStore, GradientPresets } = Modules;
  PluginInjector.instead(ClientThemeUpdate, "saveClientTheme", (args, res) => {
    const gradientPreset =
      GradientPresets.BACKGROUND_GRADIENT_PRESETS_MAP[args[0].backgroundGradientPresetId];
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

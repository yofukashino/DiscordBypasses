import { SettingValues } from "./index";
import { defaultSettings } from "./lib/consts";
export const _getGradientPreset = (preset: string): string => {
  return SettingValues.get("gradientPreset", defaultSettings.gradientPreset) ?? preset;
};
export const _getisPreview = (originalValue: boolean): boolean => {
  return !(!originalValue || SettingValues.get("clientThemes", defaultSettings.clientThemes));
};
export const _getTheme = (preset: string): string => {
  return SettingValues.get("gradientPreset", defaultSettings.gradientPreset)?.theme ?? preset;
};

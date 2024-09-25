import { PluginLogger, SettingValues } from "./index";
import { defaultSettings } from "./lib/consts";
export const _getGradientPreset = (preset: string): string => {
  return SettingValues.get("gradientPreset", defaultSettings.gradientPreset) ?? preset;
};

export const _getIsPreview = (originalValue: boolean): boolean => {
  return !(!originalValue || SettingValues.get("clientThemes", defaultSettings.clientThemes));
};

export const _getTheme = (preset: string): string => {
  return SettingValues.get("gradientPreset", defaultSettings.gradientPreset)?.theme ?? preset;
};

export const _getStreamPreview = (original: string): string | void => {
  if (!SettingValues.get("streamPreview", defaultSettings.streamPreview)) return original;
  const replacePreviewWith = SettingValues.get("fakePreview", defaultSettings.fakePreview) || "";
  if (!replacePreviewWith)
    PluginLogger.warn("No image was provided, so no stream preview is being shown.");
  return replacePreviewWith;
};

export const _getAppIconsEnabled = (): boolean => {
  return SettingValues.get("appIcons", defaultSettings.appIcons);
};

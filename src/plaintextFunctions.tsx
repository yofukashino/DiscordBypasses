import { PluginLogger, SettingValues } from "./index";
import { defaultSettings } from "./lib/consts";

export const _getIsPreview = (originalValue: boolean): boolean => {
  return !(!originalValue || SettingValues.get("clientThemes", defaultSettings.clientThemes));
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

export const _getSettingsProtoToSave = (
  protoToSave: Record<string, unknown> & {
    appearance: { clientThemeSettings: Record<string, unknown> };
  },
): Record<string, unknown> => {
  if (!SettingValues.get("clientThemes", defaultSettings.clientThemes)) {
    SettingValues.set("clientThemeSettings", defaultSettings.clientThemeSettings);
    return protoToSave;
  }
  if (protoToSave?.appearance?.clientThemeSettings)
    SettingValues.set("clientThemeSettings", protoToSave?.appearance?.clientThemeSettings);
  delete protoToSave?.appearance?.clientThemeSettings;
  return protoToSave;
};

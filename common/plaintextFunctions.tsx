import { PluginLogger, SettingValues } from "./index";
import { defaultSettings } from "./lib/consts";
import Types from "./types";

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

export const _getCustomThemesEnabled = (original): boolean => {
  return SettingValues.get("clientThemes", defaultSettings.clientThemes) || original;
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

export const _getDiffusedTimeout = (
  timeout: Record<string, Types.DefaultTypes.AnyFunction>,
): Record<string, Types.DefaultTypes.AnyFunction> => {
  return new Proxy(timeout, {
    get(timeout, prop: string) {
      if (SettingValues.get("bandwidth", defaultSettings.bandwidth)) return () => null;
      return timeout[prop];
    },
    set(timeout, prop: string, val) {
      timeout[prop] = val;
      return true;
    },
  });
};

export const _getSpotifyPauseDisabled = (): boolean => {
  return !SettingValues.get("spotifyPause", defaultSettings.spotifyPause);
};

export const _isLoggerEnabled = (): boolean => {
  return !SettingValues.get("silenceLogger", defaultSettings.silenceLogger);
};

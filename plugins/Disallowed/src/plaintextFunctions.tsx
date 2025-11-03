import { PluginLogger, SettingValues } from "@this";
import { DefaultSettings } from "@consts";
import Types from "@Types";

export const _getIsPreview = (originalValue: boolean): boolean => {
  return !(!originalValue || SettingValues.get("clientThemes", DefaultSettings.clientThemes));
};

export const _getStreamPreview = (original: string): string | void => {
  if (!SettingValues.get("streamPreview", DefaultSettings.streamPreview)) return original;
  const replacePreviewWith = SettingValues.get("fakePreview", DefaultSettings.fakePreview) || "";
  if (!replacePreviewWith)
    PluginLogger.warn("No image was provided, so no stream preview is being shown.");
  return replacePreviewWith;
};

export const _getAppIconsEnabled = (): boolean => {
  return SettingValues.get("appIcons", DefaultSettings.appIcons);
};

export const _getCustomThemesEnabled = (original): boolean => {
  return SettingValues.get("clientThemes", DefaultSettings.clientThemes) || original;
};

export const _getSettingsProtoToSave = (
  protoToSave: Record<string, unknown> & {
    appearance: { clientThemeSettings: Record<string, unknown> };
  },
): Record<string, unknown> => {
  if (!SettingValues.get("clientThemes", DefaultSettings.clientThemes)) {
    SettingValues.set("clientThemeSettings", DefaultSettings.clientThemeSettings);
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
      if (SettingValues.get("bandwidth", DefaultSettings.bandwidth)) return () => null;
      return timeout[prop];
    },
    set(timeout, prop: string, val) {
      timeout[prop] = val;
      return true;
    },
  });
};

export const _getSpotifyPauseDisabled = (): boolean => {
  return !SettingValues.get("spotifyPause", DefaultSettings.spotifyPause);
};

export const _isLoggerEnabled = (): boolean => {
  return !SettingValues.get("silenceLogger", DefaultSettings.silenceLogger);
};

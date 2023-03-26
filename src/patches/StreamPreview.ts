import { CurrentUser, PluginInjector, PluginLogger, SettingValues } from "../index";
import { defaultSettings } from "../lib/consts";
import { ElectronModule, StreamPreviewStore } from "../lib/requiredModules";
export const patchStreamPreview = (): void => {
  if (!SettingValues.get("streamPreview", defaultSettings.streamPreview)) return;
  const replacePreviewWith =
    SettingValues.get("fakePreview", defaultSettings.fakePreview) !== ""
      ? SettingValues.get("fakePreview", defaultSettings.fakePreview)
      : null;
  if (!replacePreviewWith)
    PluginLogger.warn("No image was provided, so no stream preview is being shown.");
  PluginInjector.instead(ElectronModule, "makeChunkedRequest", (args, res) => {
    if (
      (!args[0].includes("preview") && args[2].method !== "POST") ||
      !SettingValues.get("streamPreview", defaultSettings.streamPreview)
    )
      return res(...args);
    if (!replacePreviewWith) return;
    return res(args[0], { thumbnail: replacePreviewWith }, args[2]);
  });
  PluginInjector.instead(StreamPreviewStore, "getPreviewURL", (args, res) => {
    if (
      args[2] == CurrentUser.id &&
      SettingValues.get("streamPreview", defaultSettings.streamPreview)
    )
      return replacePreviewWith;
    return res(...args);
  });
};

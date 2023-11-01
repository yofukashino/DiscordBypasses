import { users as UltimateUserStore } from "replugged/common";
import { PluginInjector, PluginLogger, SettingValues } from "../index";
import { defaultSettings } from "../lib/consts";
import { ApplicationStreamPreviewStore, ElectronModule } from "../lib/requiredModules";

export default (): void => {
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
  PluginInjector.after(ApplicationStreamPreviewStore, "getPreviewURL", (args, res: string) => {
    if (
      args[2] == UltimateUserStore.getCurrentUser()?.id &&
      SettingValues.get("streamPreview", defaultSettings.streamPreview) &&
      !res?.startsWith("https://")
    )
      return replacePreviewWith;
    return res;
  });
};

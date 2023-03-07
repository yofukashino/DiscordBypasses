import { PluginInjector, SettingValues, UserStore } from "../index";
import { defaultSettings } from "../lib/consts";
export const bypassNSFW = (): void => {
  PluginInjector.after(UserStore, "getCurrentUser", (_args, res) => {
    if (res?.nsfwAllowed === false)
      res.nsfwAllowed = SettingValues.get("NSFW", defaultSettings.NSFW);
    return res;
  });
};

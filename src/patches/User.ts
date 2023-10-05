import { common } from "replugged";
import { PluginInjector, SettingValues } from "../index";
import { defaultSettings } from "../lib/consts";

const { users: UltimateUserStore } = common;

export const bypassNSFW = (): void => {
  PluginInjector.after(UltimateUserStore, "getCurrentUser", (_args, res) => {
    if (res?.nsfwAllowed === false)
      res.nsfwAllowed = SettingValues.get("NSFW", defaultSettings.NSFW);
    return res;
  });
};

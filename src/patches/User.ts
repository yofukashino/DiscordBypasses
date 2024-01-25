import { users as UltimateUserStore } from "replugged/common";
import { PluginInjector, SettingValues } from "../index";
import { defaultSettings } from "../lib/consts";

export default (): void => {
  PluginInjector.after(UltimateUserStore, "getCurrentUser", ([original]: [boolean], res) => {
    if (!original && res?.nsfwAllowed === false)
      res.nsfwAllowed = SettingValues.get("NSFW", defaultSettings.NSFW);
    return res;
  });
};

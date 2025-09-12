import { users as UltimateUserStore } from "replugged/common";
import { PluginInjector, SettingValues } from "../index";
import { defaultSettings } from "../lib/consts";

export default (): void => {
  PluginInjector.after(UltimateUserStore, "getCurrentUser", (_, res) => {
    if (res && !res?.nsfwAllowed) {
      const nsfwAllowed: boolean & { original?: boolean } = SettingValues.get(
        "NSFW",
        defaultSettings.NSFW,
      );
      nsfwAllowed.original = res.nsfwAllowed;
      res.nsfwAllowed = nsfwAllowed;
    }
    return res;
  });
};

import { users } from "replugged/common";
import { PluginInjector, SettingValues } from "@this";
import { DefaultSettings } from "@consts";

PluginInjector.after(users, "getCurrentUser", (_, res) => {
  if (res && !res?.nsfwAllowed) {
    const nsfwAllowed: boolean & { original?: boolean } = SettingValues.get(
      "NSFW",
      DefaultSettings.NSFW,
    );

    nsfwAllowed.original = res.nsfwAllowed;
    res.nsfwAllowed = nsfwAllowed;
  }
  return res;
});

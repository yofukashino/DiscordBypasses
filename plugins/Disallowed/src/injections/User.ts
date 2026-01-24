import { users } from "replugged/common";
import { PluginInjector, SettingValues } from "@this";
import { DefaultSettings } from "@consts";
import type Types from "@Types";

PluginInjector.after(users, "getCurrentUser", (_, res: Types.User) => {
  if (!res || res.nsfwAllowed || !SettingValues.get("NSFW", DefaultSettings.NSFW)) return res;

  const nsfwAllowed: Types.User["nsfwAllowed"] = true;
  nsfwAllowed.original = res.nsfwAllowed;
  res.nsfwAllowed = nsfwAllowed;

  return res;
});

PluginInjector.after(users, "getCurrentUser", (_, res: Types.User) => {
  const nsfwAllowed =
    res?.nsfwAllowed?.original !== void 0 ? res?.nsfwAllowed?.original : res?.nsfwAllowed;

  if (
    !res ||
    !nsfwAllowed ||
    res?.ageVerificationStatus === 3 ||
    !SettingValues.get("ageVerification", DefaultSettings.ageVerification)
  )
    return res;

  res.ageVerificationStatus = 3;
  return res;
});

import { SettingValues } from "../index";
import { defaultSettings } from "../lib/consts";
import { DiscordConstantsModule } from "../lib/requiredModules";
import * as Utils from "../lib/utils";
export const patchGuildVerificationStore = (): void => {
  const GuildVerificationConst = Object.entries(DiscordConstantsModule).find(
    ([_, value]: [string, object]) => Utils.hasProps(value, ["ACCOUNT_AGE", "MEMBER_AGE"]),
  )[0];
  Object.defineProperty(DiscordConstantsModule, GuildVerificationConst, {
    get: () => {
      return SettingValues.get("verification", defaultSettings.verification)
        ? { ACCOUNT_AGE: 0, MEMBER_AGE: 0 }
        : { ACCOUNT_AGE: 5, MEMBER_AGE: 10 };
    },
    configurable: true,
    enumerable: true,
  });
};

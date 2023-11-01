import { SettingValues } from "../index";
import { defaultSettings } from "../lib/consts";
import { DiscordConstants } from "../lib/requiredModules";
export default (): void => {
  Object.defineProperty(DiscordConstants, "VerificationCriteria", {
    get: () => {
      return SettingValues.get("verification", defaultSettings.verification)
        ? { ACCOUNT_AGE: 0, MEMBER_AGE: 0 }
        : { ACCOUNT_AGE: 5, MEMBER_AGE: 10 };
    },
    configurable: true,
    enumerable: true,
  });
};

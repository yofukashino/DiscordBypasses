import { SettingValues } from "../index";
import { defaultSettings } from "../lib/consts";
import Modules from "../lib/requiredModules";
import Types from "../types";

export default (): void => {
  const { DiscordConstants } = Modules;
  const [VerificationCriteria] = Object.entries(DiscordConstants).find(
    ([_key, value]: [string, Record<string, unknown> & Types.DefaultTypes.AnyFunction]) =>
      typeof value?.ACCOUNT_AGE === "number",
  );

  Object.defineProperty(DiscordConstants, VerificationCriteria, {
    get: () => {
      return SettingValues.get("verification", defaultSettings.verification)
        ? { ACCOUNT_AGE: 0, MEMBER_AGE: 0 }
        : { ACCOUNT_AGE: 5, MEMBER_AGE: 10 };
    },
    configurable: true,
    enumerable: true,
  });
};

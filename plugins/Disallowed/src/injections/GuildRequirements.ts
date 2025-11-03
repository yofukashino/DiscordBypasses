import { constants } from "replugged/common";
import { SettingValues } from "@this";
import { DefaultSettings } from "@consts";

const [GUILD_REQUIREMENT_KEY] = Object.entries(constants.raw.all()).find(
  ([_key, value]: [string, Partial<{ ACCOUNT_AGE?: number }>]) =>
    typeof value?.ACCOUNT_AGE === "number",
);

Object.defineProperty(constants.raw, GUILD_REQUIREMENT_KEY, {
  get: () => {
    return SettingValues.get("verification", DefaultSettings.verification)
      ? { ACCOUNT_AGE: 0, MEMBER_AGE: 0 }
      : { ACCOUNT_AGE: 5, MEMBER_AGE: 10 };
  },
  configurable: true,
  enumerable: true,
});

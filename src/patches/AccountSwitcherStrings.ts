import { SettingValues } from "../index";
import { defaultSettings } from "../lib/consts";
import { AccountSwitcherStrings } from "../lib/requiredModules";
export const patchAccountSwitcherStrings = (): void => {
  const AccountSwitcherConst = Object.entries(AccountSwitcherStrings).find(
    ([_, value]: [string, object]) => typeof value === "number",
  )[0];
  Object.defineProperty(AccountSwitcherStrings, AccountSwitcherConst, {
    get: () => {
      return SettingValues.get("maxAccounts", defaultSettings.maxAccounts) ? Infinity : 5;
    },
    configurable: true,
    enumerable: true,
  });
};

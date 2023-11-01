import { SettingValues } from "../index";
import { defaultSettings } from "../lib/consts";
import { AccountSwitcherStrings } from "../lib/requiredModules";
export default (): void => {
  Object.defineProperty(AccountSwitcherStrings, "MAX_ACCOUNTS", {
    get: () => {
      return SettingValues.get("maxAccounts", defaultSettings.maxAccounts) ? Infinity : 5;
    },
    configurable: true,
    enumerable: true,
  });
};

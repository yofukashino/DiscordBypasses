import { SettingValues } from "../index";
import { defaultSettings } from "../lib/consts";
import Modules from "../lib/requiredModules";
export default (): void => {
  const { AccountSwitcherStrings } = Modules;
  Object.defineProperty(AccountSwitcherStrings, "MAX_ACCOUNTS", {
    get: () => {
      return SettingValues.get("maxAccounts", defaultSettings.maxAccounts) ? Infinity : 5;
    },
    configurable: true,
    enumerable: true,
  });
};

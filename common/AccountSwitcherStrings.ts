import { SettingValues } from "../index";
import { defaultSettings } from "../lib/consts";
import Modules from "../lib/requiredModules";
export default (): void => {
  const { AccountSwitcherStrings } = Modules;
  const [MAX_ACCOUNTS] = Object.entries(AccountSwitcherStrings).find(
    ([_key, value]) => typeof value === "number",
  );
  Object.defineProperty(AccountSwitcherStrings, MAX_ACCOUNTS, {
    get: () => {
      return SettingValues.get("maxAccounts", defaultSettings.maxAccounts) ? Infinity : 5;
    },
    configurable: true,
    enumerable: true,
  });
};

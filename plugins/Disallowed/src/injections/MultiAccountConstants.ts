import { SettingValues } from "@this";
import { DefaultSettings } from "@consts";
import { MultiAccountConstants } from "@lib/RequiredModules";

const MAX_ACCOUNTS = Object.keys(MultiAccountConstants).find(
  (key) => typeof MultiAccountConstants[key] === "number",
);

Object.defineProperty(MultiAccountConstants, MAX_ACCOUNTS, {
  get: () => {
    return SettingValues.get("maxAccounts", DefaultSettings.maxAccounts) ? Infinity : 5;
  },
  configurable: true,
  enumerable: true,
});

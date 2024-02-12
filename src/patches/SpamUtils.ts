import { PluginInjector, SettingValues } from "../index";
import { SpamUtils } from "../lib/requiredModules";
import { defaultSettings } from "../lib/consts";

export default (): void => {
  PluginInjector.after(SpamUtils, "isSpam", (_args, res) =>
    SettingValues.get("spam", defaultSettings.spam) ? false : res,
  );
};

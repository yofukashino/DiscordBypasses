import { PluginInjector, SettingValues } from "../index";
import { defaultSettings } from "../lib/consts";
import Modules from "../lib/requiredModules";

export default (): void => {
  const { SpamUtils } = Modules;
  PluginInjector.after(SpamUtils, "isSpam", (_args, res) =>
    SettingValues.get("spam", defaultSettings.spam) ? false : res,
  );
};

import { webpack } from "replugged";
import { PluginInjector, SettingValues } from "../index";
import { defaultSettings } from "../lib/consts";
import Modules from "../lib/requiredModules";

export default (): void => {
  const { SpamUtils } = Modules;
  const isSpam = webpack.getFunctionKeyBySource(SpamUtils, /return .\(.\.author\.id\)/);
  PluginInjector.after(SpamUtils, isSpam, (_args, res) =>
    SettingValues.get("spam", defaultSettings.spam) ? false : res,
  );
};

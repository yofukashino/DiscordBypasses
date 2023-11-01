import { PluginInjector, SettingValues } from "../index";
import { defaultSettings } from "../lib/consts";
import { FolderConstructor } from "../lib/requiredModules";
export default (): void => {
  PluginInjector.before(FolderConstructor, "default", (args: [{ expanded: boolean }]) => {
    args[0].expanded ||= SettingValues.get("plainFolderIcon", defaultSettings.plainFolderIcon);
    return args;
  });
};

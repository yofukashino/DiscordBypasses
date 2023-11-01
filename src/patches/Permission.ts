import { PluginInjector, SettingValues } from "../index";
import { defaultSettings } from "../lib/consts";
import { DiscordConstants, PermissionStore } from "../lib/requiredModules";
export default (): void => {
  PluginInjector.after(PermissionStore, "can", (args: [bigint], res) => {
    if (
      args[0] == DiscordConstants.Permissions.USE_VAD &&
      SettingValues.get("PTT", defaultSettings.PTT)
    )
      return true;
    return res;
  });
};

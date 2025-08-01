import { webpack } from "replugged";
import { PluginInjector, SettingValues } from "../index";
import { defaultSettings } from "../lib/consts";
import Modules from "../lib/requiredModules";
import Types from "../types";
export default (): void => {
  const { DiscordConstants, PermissionStore } = Modules;
  const Permissions = webpack.getExportsForProps<Types.DiscordConstants["Permissions"]>(
    DiscordConstants,
    ["USE_VAD", "ADMINISTRATOR"],
  );

  PluginInjector.after(PermissionStore, "can", (args: [bigint], res) => {
    if (args[0] == Permissions.USE_VAD && SettingValues.get("PTT", defaultSettings.PTT))
      return true;
    return res;
  });
};

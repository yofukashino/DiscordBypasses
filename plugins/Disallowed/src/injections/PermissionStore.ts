import { constants } from "replugged/common";
import { PluginInjector, SettingValues } from "@this";
import { DefaultSettings } from "@consts";
import { PermissionStore } from "@lib/RequiredModules";

PluginInjector.after(PermissionStore, "can", ([perm]: [bigint], res) => {
  if (perm === constants.Permissions.USE_VAD && SettingValues.get("PTT", DefaultSettings.PTT))
    return true;
  return res;
});

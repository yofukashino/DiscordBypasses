import { PluginInjector, SettingValues } from "@this";
import { DefaultSettings } from "@consts";
import { AudioResolver } from "@lib/RequiredModules";

PluginInjector.before(AudioResolver, "exports", ([sound]): [string] => {
  return sound.includes("call_ringing") &&
    SettingValues.get("ringtone", DefaultSettings.ringtone) !== "sync"
    ? [`./${SettingValues.get("ringtone", DefaultSettings.ringtone)}`]
    : [sound];
});

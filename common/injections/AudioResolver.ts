import { PluginInjector, SettingValues } from "../index";
import Modules from "../lib/requiredModules";
import { defaultSettings } from "../lib/consts";

export default async (): Promise<void> => {
  const AudioResolver = await Modules.AudioResolverPromise;
  PluginInjector.before(AudioResolver, "exports", ([sound]) => {
    return sound.includes("call_ringing") &&
      SettingValues.get("ringtone", defaultSettings.ringtone) !== "sync"
      ? [`./${SettingValues.get("ringtone", defaultSettings.ringtone)}`]
      : [sound];
  });
};

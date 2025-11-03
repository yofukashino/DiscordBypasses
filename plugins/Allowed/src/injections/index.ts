import { PluginInjector, PluginLogger } from "@this";
import Modules from "@lib/RequiredModules";

const InjectionNames = [
  "AudioResolver.ts",
  "DiscordIPC.ts",
  "Folder.ts",
  "IdleStore.ts",
  "MediaModal.ts",
  "MultiAccountConstants.ts",
  "PermissionStore.ts",
  "PreloadedUserSettings.ts",
  "SpamUtils.ts",
  "Spotify.ts",
  "VoiceMessages.tsx",
] as const;

export const applyInjections = async (): Promise<void> => {
  try {
    await Modules.loadModules();
    await Promise.all(
      InjectionNames.map((name) => import(`../../../Disallowed/src/injections/${name}`)),
    );
  } catch (err: unknown) {
    PluginLogger.error(err);
  }
};

export const removeInjections = (): void => {
  PluginInjector.uninjectAll();
};

export default { applyInjections, removeInjections };

import { Injector, Logger, settings } from "replugged";
import { DefaultSettings } from "@consts";
import Settings from "@components/Settings";
import Injection from "@Injections";
import "@Style";

export const PluginLogger = Logger.plugin("DiscordBypasses", "#ffffff80");
export const SettingValues = settings.init("dev.yofukashino.DiscordBypasses", DefaultSettings);
export const PluginInjector = new Injector();

export const start = (): void => {
  Settings.registerSettings();
  void Injection.applyInjections();
};

export const stop = (): void => {
  Injection.removeInjections();
};

export { Settings } from "@components/Settings";

export {
  _getIsPreview,
  _getStreamPreview,
  _getAppIconsEnabled,
  _getCustomThemesEnabled,
  _getSettingsProtoToSave,
  _getDiffusedTimeout,
  _getSpotifyPauseDisabled,
  _isLoggerEnabled,
  _isStreamPlaying,
} from "@PlaintextFunctions";

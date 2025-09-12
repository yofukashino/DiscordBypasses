import { Injector, Logger, settings } from "replugged";
import { defaultSettings } from "./lib/consts";
export const PluginLogger = Logger.plugin("DiscordBypasses", "#ffffff80");
export const SettingValues = settings.init("dev.tharki.DiscordBypasses", defaultSettings);
export const PluginInjector = new Injector();
import Settings from "./Components/Settings";
import Injection from "./injections/index";

import "./style.css";

export const start = (): void => {
  Settings.registerSettings();
  void Injection.applyInjections().catch((err) => PluginLogger.error(err));
};

export const stop = (): void => {
  PluginInjector.uninjectAll();
};

export { Settings } from "./Components/Settings";

export {
  _getIsPreview,
  _getStreamPreview,
  _getAppIconsEnabled,
  _getCustomThemesEnabled,
  _getSettingsProtoToSave,
  _getDiffusedTimeout,
  _getSpotifyPauseDisabled,
  _isLoggerEnabled,
} from "./plaintextFunctions";

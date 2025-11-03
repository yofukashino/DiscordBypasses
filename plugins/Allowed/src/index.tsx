import { Injector, Logger, settings } from "replugged";
import { DefaultSettings } from "@consts";
import PluginSettings from "@components/Settings";
import Injection from "@Injections";
import "@Style";

export const PluginLogger = Logger.plugin("DiscordBypasses", "#ffffff80");
export const SettingValues = settings.init("dev.yofukashino.DiscordBypasses", DefaultSettings);
export const PluginInjector = new Injector();

export const start = (): void => {
  PluginSettings.registerSettings("dev.tharki.LegalDiscordBypasses");
  void Injection.applyInjections();
};

export const stop = (): void => {
  Injection.removeInjections();
};

export const Settings = (): React.ReactElement => <PluginSettings.Settings store={true} />;

export {
  _getIsPreview,
  _getStreamPreview,
  _getAppIconsEnabled,
  _getCustomThemesEnabled,
  _getSettingsProtoToSave,
  _getSpotifyPauseDisabled,
  _isLoggerEnabled,
} from "@PlaintextFunctions";

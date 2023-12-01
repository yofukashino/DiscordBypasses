import { Injector, Logger, settings } from "replugged";
import { defaultSettings } from "./lib/consts";
export const PluginLogger = Logger.plugin("DiscordBypasses");
export const SettingValues = await settings.init("dev.tharki.DiscordBypasses", defaultSettings);
export const PluginInjector = new Injector();

import { registerSettings } from "./Components/Settings";
import Injection from "./patches/index";
export const start = (): void => {
  registerSettings();
  Injection.applyInjections();
};

export const stop = (): void => {
  PluginInjector.uninjectAll();
};

export { Settings } from "./Components/Settings";

export { _getGradientPreset, _getTheme, _getisPreview } from "./plaintextFunctions";

import { Injector, Logger, common, settings } from "replugged";
export const { users: UserStore } = common;
import * as Utils from "./lib/utils";
import * as Types from "./types";
export const CurrentUser = (await Utils.currentUser) as Types.User;
import { defaultSettings } from "./lib/consts";
export const PluginLogger = Logger.plugin("DiscordBypasses");
export const SettingValues = await settings.init("dev.tharki.DiscordBypasses", defaultSettings);
export const PluginInjector = new Injector();

import { registerSettings } from "./Components/Settings";
import { applyInjections } from "./patches/index";
export const start = (): void => {
  registerSettings();
  applyInjections();
};

export const stop = (): void => {
  PluginInjector.uninjectAll();
};

export { Settings } from "./Components/Settings";

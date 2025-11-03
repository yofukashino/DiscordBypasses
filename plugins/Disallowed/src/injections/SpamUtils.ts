import { webpack } from "replugged";
import { PluginInjector, SettingValues } from "@this";
import { DefaultSettings } from "@consts";
import { SpamUtils } from "@lib/RequiredModules";

const loader = webpack.getFunctionKeyBySource(SpamUtils, /return .\(.\.author\.id\)/);

PluginInjector.after(SpamUtils, loader, (_args, res) =>
  SettingValues.get("spam", DefaultSettings.spam) ? false : res,
);

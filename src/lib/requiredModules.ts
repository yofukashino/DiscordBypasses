import { webpack } from "replugged";
import * as Utils from "./utils";
import * as Types from "../types";
export const TimeoutModule = webpack.getModule((m) =>
  Utils.prototypeChecker(m?.exports, ["start", "stop", "isStarted"]),
);
export const Timeout = Object.values(TimeoutModule).find((m: Types.DefaultTypes.AnyFunction) =>
  ["start", "stop", "isStarted"].every((proto) => m?.prototype?.[proto]),
) as Types.Timeout;
export const DiscordConstantsModule =
  webpack.getBySource<Types.DefaultTypes.ObjectExports>(/command:"giphy"/);
export const DiscordConstants = {
  Permissions: webpack.getExportsForProps(DiscordConstantsModule, [
    "ADMINISTRATOR",
    "MANAGE_GUILD",
  ]),
} as Types.DiscordConstants;
export const AccountSwitcherStrings = webpack.getBySource<Types.DefaultTypes.ObjectExports>(
  /multiaccount_cta_tooltip_seen/,
);
export const PermissionStore = webpack.getByProps<Types.PermissionStore>("getChannelPermissions");
export const ElectronModule = webpack.getByProps<Types.ElectronModule>("setBadge");
export const StreamPreviewStore = webpack.getByProps<Types.StreamPreviewStore>("getPreviewURL");
export const CurrentUserIdle = webpack.getByProps<Types.CurrentUserIdle>([
  "getIdleSince",
  "isIdle",
  "isAFK",
]);
export const SpotifyProtocoalStore =
  webpack.getBySource<Types.GenericModule>(/"SPOTIFY_PROFILE_UPDATE"/);
export const SpotifyPremiumCheck = webpack.getBySource<Types.GenericModule>(
  /"spotify account is not premium"/,
);
export const ClientThemesBackgroundStore = webpack.getByProps<Types.ClientThemesBackgroundStore>([
  "isPreview",
  "gradientPreset",
  "setGradientPreset",
]);
export const ImageConstructorModule = webpack.getBySource("\\.gif($|\\?|#)");
export const ClientThemeUpdate = webpack.getBySource<Types.GenericModule | string>(
  "updateTheme:function",
);
export const GradientPresetModule = webpack.getBySource(
  ".Messages.CLIENT_THEMES_GRADIENT_MINT_APPLE",
);
export const GradientPresets = Object.values(GradientPresetModule).find(
  (presets) => !Array.isArray(presets),
);

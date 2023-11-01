import { webpack } from "replugged";
import Types from "../types";
export const TimeoutManager = webpack.getByProps<Types.TimeoutManager>("Timeout", "DelayedCall");

export const DiscordConstants = webpack.getByProps<Types.DiscordConstants>("VerificationCriteria");

export const AccountSwitcherStrings = webpack.getByProps<{ MAX_ACCOUNTS: number }>("MAX_ACCOUNTS");
export const PermissionStore = webpack.getByStoreName<Types.PermissionStore>("PermissionStore");
export const ElectronModule = webpack.getByProps<Types.ElectronModule>("setBadge");
export const ApplicationStreamPreviewStore =
  webpack.getByStoreName<Types.ApplicationStreamPreviewStore>("ApplicationStreamPreviewStore");
export const IdleStore = webpack.getByStoreName<Types.IdleStore>("IdleStore");
export const SpotifyProtocoalStore = webpack.getByProps<Types.SpotifyProtocoalStore>(
  "getProfile",
  "SpotifyAPI",
);
export const SpotifyChecks = webpack.getByProps<Types.SpotifyChecks>(
  "isSpotifyPremium",
  "ensureSpotifyPremium",
);
export const ClientThemesBackgroundStore =
  webpack.getByStoreName<Types.ClientThemesBackgroundStore>("ClientThemesBackgroundStore");
export const ImageConstructor = webpack.getByProps<Types.ImageConstructor>("IMAGE_GIF_RE");
export const ClientThemeUpdate = webpack.getByProps<{
  saveClientTheme: Types.DefaultTypes.AnyFunction;
}>("saveClientTheme");
export const GradientPresets = webpack.getByProps<{
  BACKGROUND_GRADIENT_PRESETS_MAP: Record<string, string>;
}>("BACKGROUND_GRADIENT_PRESETS_MAP");
export const { exports: FolderConstructor } = webpack.getBySource(
  ".Messages.GUILD_FOLDER_TOOLTIP_A11Y_LABEL",
  { raw: true },
);

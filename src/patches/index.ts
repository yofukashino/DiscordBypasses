import { patchAccountSwitcherStrings } from "./AccountSwitcherStrings";
import { patchClientThemeUpdate } from "./ClientThemeUpdate";
import { patchIdle } from "./CurrentUserIdle";
import { patchGuildVerificationStore } from "./GuildVerificationStore";
import { patchImage } from "./Image";
import { patchPTT } from "./Permission";
import { patchBadges } from "./SetBadge";
import { patchSpotifyPremium } from "./SpotifyPremium";
import { patchStreamPreview } from "./StreamPreview";
import { patchTimeouts } from "./Timeout";
import { bypassNSFW } from "./User";

export const applyInjections = (): void => {
  patchAccountSwitcherStrings();
  patchClientThemeUpdate();
  patchIdle();
  patchGuildVerificationStore();
  patchImage();
  patchPTT();
  patchBadges();
  patchSpotifyPremium();
  patchStreamPreview();
  patchTimeouts();
  bypassNSFW();
};

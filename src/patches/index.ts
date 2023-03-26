import { patchAccountSwitcherStrings } from "./AccountSwitcherStrings";
import { patchClientThemeUpdate } from "./ClientThemeUpdate";
import { patchIdle } from "./CurrentUserIdle";
import { patchGuildVerificationStore } from "./GuildVerificationStore";
import { patchPTT } from "./Permission";
import { patchBadges } from "./SetBadge";
import { patchSpotifyPause } from "./SpotifyPause";
import { patchSpotifyPremium } from "./SpotifyPremium";
import { patchStreamPreview } from "./StreamPreview";
import { patchTimeouts } from "./Timeout";
import { bypassNSFW } from "./User";

export const applyInjections = (): void => {
  patchAccountSwitcherStrings();
  patchClientThemeUpdate();
  patchIdle();
  patchGuildVerificationStore();
  patchPTT();
  patchBadges();
  patchSpotifyPause();
  patchSpotifyPremium();
  patchStreamPreview();
  patchTimeouts();
  bypassNSFW();
};

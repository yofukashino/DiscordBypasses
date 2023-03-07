import { bypassNSFW } from "./User";
import { patchTimeouts } from "./Timeout";
import { patchPTT } from "./Permission";
import { patchStreamPreview } from "./StreamPreview";
import { patchIdle } from "./CurrentUserIdle";
import { patchSpotifyPremium } from "./SpotifyPremium";
import { patchGuildVerificationStore } from "./GuildVerificationStore";
import { patchAccountSwitcherStrings } from "./AccountSwitcherStrings";
export const applyInjections = (): void => {
  bypassNSFW();
  patchTimeouts();
  patchPTT();
  patchStreamPreview();
  patchIdle();
  patchSpotifyPremium();
  patchGuildVerificationStore();
  patchAccountSwitcherStrings();
};

import patchAccountSwitcherStrings from "./AccountSwitcherStrings";
import patchAudioResolver from "./AudioResolver";
import patchClientThemeUpdate from "./ClientThemeUpdate";
import patchFolder from "./Folder";
import patchGuildVerificationStore from "./GuildVerificationStore";
import patchIdle from "./IdleStore";
import patchImage from "./Image";
import patchPTT from "./Permission";
import patchBadges from "./SetBadge";
import patchSpamUtils from "./SpamUtils";
import patchSpotifyPremium from "./SpotifyPremium";
import patchStreamPreview from "./StreamPreview";
import patchTimeouts from "./Timeout";
import bypassNSFW from "./User";

export const applyInjections = (): void => {
  patchAccountSwitcherStrings();
  void patchAudioResolver();
  patchClientThemeUpdate();
  patchFolder();
  patchGuildVerificationStore();
  patchIdle();
  patchImage();
  patchPTT();
  patchBadges();
  patchSpamUtils();
  patchSpotifyPremium();
  patchStreamPreview();
  patchTimeouts();
  bypassNSFW();
};

export default { applyInjections };

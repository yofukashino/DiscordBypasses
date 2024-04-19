import Modules from "../lib/requiredModules";
import injectAccountSwitcherStrings from "./AccountSwitcherStrings";
import injectAudioResolver from "./AudioResolver";
import injectClientThemeUpdate from "./ClientThemeUpdate";
import injectFolder from "./Folder";
import injectGuildVerificationStore from "./GuildVerificationStore";
import injectIdle from "./IdleStore";
import injectImage from "./Image";
import injectPTT from "./Permission";
import injectBadges from "./SetBadge";
import injectSpamUtils from "./SpamUtils";
import injectSpotifyPremium from "./SpotifyPremium";
import injectStreamPreview from "./StreamPreview";
import injectTimeouts from "./Timeout";
import bypassNSFW from "./User";

export const applyInjections = async (): Promise<void> => {
  await Modules.loadModules();
  injectAccountSwitcherStrings();
  injectAudioResolver();
  injectClientThemeUpdate();
  injectFolder();
  injectGuildVerificationStore();
  injectIdle();
  injectImage();
  injectPTT();
  injectBadges();
  injectSpamUtils();
  injectSpotifyPremium();
  injectStreamPreview();
  injectTimeouts();
  bypassNSFW();
};

export default { applyInjections };

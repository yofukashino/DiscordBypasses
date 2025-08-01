import Modules from "../lib/requiredModules";
import injectAccountSwitcherStrings from "./AccountSwitcherStrings";
import injectAudioResolver from "./AudioResolver";
import injectFolder from "./Folder";
import injectIdle from "./IdleStore";
import injectImage from "./Image";
import injectPTT from "./Permission";
import injectPreloadedUserSettings from "./PreloadedUserSettings";
import injectBadges from "./SetBadge";
import injectSpamUtils from "./SpamUtils";
import injectSpotifyPremium from "./SpotifyPremium";
import injectTimeouts from "./Timeout";

export const applyInjections = async (): Promise<void> => {
  await Modules.loadModules();
  injectAccountSwitcherStrings();
  void injectAudioResolver();
  injectFolder();
  injectIdle();
  injectImage();
  injectPTT();
  injectPreloadedUserSettings();
  injectBadges();
  injectSpamUtils();
  injectSpotifyPremium();
  injectTimeouts();
};

export default { applyInjections };

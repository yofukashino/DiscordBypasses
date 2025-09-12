import Modules from "../lib/requiredModules";
import injectAccountSwitcherStrings from "./AccountSwitcherStrings";
import injectAudioResolver from "./AudioResolver";
import injectFolder from "./Folder";
import injectGuildVerificationStore from "./GuildVerificationStore";
import injectIdle from "./IdleStore";
import injectImage from "./Image";
import injectPreloadedUserSettings from "./PreloadedUserSettings";
import injectPTT from "./Permission";
import injectBadges from "./SetBadge";
import injectSpamUtils from "./SpamUtils";
import injectSpotifyPremium from "./SpotifyPremium";
import injectUser from "./User";
import injectVoiceMessages from "./VoiceMessages";

export const applyInjections = async (): Promise<void> => {
  await Modules.loadModules();
  injectAccountSwitcherStrings();
  void injectAudioResolver();
  injectFolder();
  injectGuildVerificationStore();
  injectIdle();
  injectImage();
  injectPreloadedUserSettings();
  injectPTT();
  injectBadges();
  injectSpamUtils();
  injectSpotifyPremium();
  injectUser();
  injectVoiceMessages();
};

export default { applyInjections };

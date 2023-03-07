import { CurrentUser } from "../index";
import { ClientThemesExperimentConfig } from "./requiredModules";
export const defaultSettings = {
  NSFW: !CurrentUser?.nsfwAllowed,
  bandwidth: true,
  PTT: true,
  streamPreview: true,
  fakePreview: "",
  noAFK: true,
  spotifyPremium: true,
  spotifyPause: true,
  verification: true,
  maxAccounts: true,
  clientThemes: ClientThemesExperimentConfig.getCurrentConfig().hasSidebarEditor,
  plainFolderIcon: true,
};

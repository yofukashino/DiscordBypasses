import { CurrentUser } from "../index";
export const defaultSettings = {
  NSFW: !CurrentUser?.nsfwAllowed,
  bandwidth: true,
  PTT: true,
  setBadge: true,
  streamPreview: true,
  fakePreview: "",
  noAFK: true,
  spotifyPremium: true,
  spotifyPause: true,
  verification: true,
  maxAccounts: true,
  clientThemes: true,
  gradientPreset: null,
  plainFolderIcon: true,
};

import { users as UltimateUserStore } from "replugged/common";

export const defaultSettings = {
  get NSFW() {
    // @ts-expect-error uum i cant think of a better way?
    return !UltimateUserStore.getCurrentUser(true)?.nsfwAllowed ?? false;
  },
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
  appIcons: true,
  gradientPreset: null,
  plainFolderIcon: true,
  favIMG: true,
  ringtone: "sync",
  spam: true,
  voiceMessage: true,
};

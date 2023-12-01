import { users as UltimateUserStore } from "replugged/common";

export const defaultSettings = {
  get NSFW() {
    return !UltimateUserStore.getCurrentUser()?.nsfwAllowed ?? false;
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
  gradientPreset: null,
  plainFolderIcon: true,
  favIMG: true,
  ringtone: "call_ringing_beat.mp3",
};

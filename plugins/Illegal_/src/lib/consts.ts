import { users as UltimateUserStore } from "replugged/common";
import Types from "../types";

export const defaultSettings = {
  get NSFW() {
    return !(UltimateUserStore.getCurrentUser() as Types.User)?.nsfwAllowed.original || false;
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
  clientThemeSettings: null,
  appIcons: true,
  plainFolderIcon: true,
  favIMG: true,
  ringtone: "sync",
  spam: true,
  voiceMessage: true,
  silenceLogger: false,
};

export { types as DefaultTypes } from "replugged";
import { types as DefaultTypes } from "replugged";
export { ReactElement } from "react";
export interface GenericModule {
  [key: string]: DefaultTypes.AnyFunction;
}
export interface ElectronModule {
  architecture: string;
  asyncify: DefaultTypes.AnyFunction;
  beforeUnload: DefaultTypes.AnyFunction;
  blockDisplaySleep: DefaultTypes.AnyFunction;
  blur: DefaultTypes.AnyFunction;
  bounceDock: DefaultTypes.AnyFunction;
  buildNumber: DefaultTypes.AnyFunction;
  canBootstrapNewUpdater: DefaultTypes.AnyFunction;
  canCopyImage: DefaultTypes.AnyFunction;
  cleanupDisplaySleep: DefaultTypes.AnyFunction;
  clearCandidateGamesCallback: DefaultTypes.AnyFunction;
  close: DefaultTypes.AnyFunction;
  copy: DefaultTypes.AnyFunction;
  copyImage: DefaultTypes.AnyFunction;
  crash: DefaultTypes.AnyFunction;
  cut: DefaultTypes.AnyFunction;
  detectPid: DefaultTypes.AnyFunction;
  ensureModule: DefaultTypes.AnyFunction;
  flashFrame: DefaultTypes.AnyFunction;
  flushCookies: DefaultTypes.AnyFunction;
  flushDNSCache: DefaultTypes.AnyFunction;
  flushStorageData: DefaultTypes.AnyFunction;
  focus: DefaultTypes.AnyFunction;
  fullscreen: DefaultTypes.AnyFunction;
  generateSessionFromPid: DefaultTypes.AnyFunction;
  getAudioPid: DefaultTypes.AnyFunction;
  getCloudSync: DefaultTypes.AnyFunction;
  getCrashReporterMetadata: DefaultTypes.AnyFunction;
  getDesktopSourceFromPid: DefaultTypes.AnyFunction;
  getDiscordMemoryUsage: DefaultTypes.AnyFunction;
  getDiscordUtils: DefaultTypes.AnyFunction;
  getDispatch: DefaultTypes.AnyFunction;
  getEnableHardwareAcceleration: DefaultTypes.AnyFunction;
  getGPUDriverVersions: DefaultTypes.AnyFunction;
  getGameUtils: DefaultTypes.AnyFunction;
  getIdleMilliseconds: DefaultTypes.AnyFunction;
  getPidFromDesktopSource: DefaultTypes.AnyFunction;
  getSetting: DefaultTypes.AnyFunction;
  getVoiceEngine: DefaultTypes.AnyFunction;
  inputEventRegister: DefaultTypes.AnyFunction;
  inputEventUnregister: DefaultTypes.AnyFunction;
  invoke: DefaultTypes.AnyFunction;
  isAlwaysOnTop: DefaultTypes.AnyFunction;
  isSystemDarkMode: DefaultTypes.AnyFunction;
  makeChunkedRequest: DefaultTypes.AnyFunction;
  maximize: DefaultTypes.AnyFunction;
  minimize: DefaultTypes.AnyFunction;
  moduleVersions: DefaultTypes.AnyFunction;
  on: DefaultTypes.AnyFunction;
  paste: DefaultTypes.AnyFunction;
  purgeMemory: DefaultTypes.AnyFunction;
  readClipboard: DefaultTypes.AnyFunction;
  relaunch: DefaultTypes.AnyFunction;
  releaseChannel: DefaultTypes.AnyFunction;
  requireModule: DefaultTypes.AnyFunction;
  restore: DefaultTypes.AnyFunction;
  saveFile: DefaultTypes.AnyFunction;
  saveImage: DefaultTypes.AnyFunction;
  send: DefaultTypes.AnyFunction;
  setAlwaysOnTop: DefaultTypes.AnyFunction;
  setApplicationBackgroundColor: DefaultTypes.AnyFunction;
  setBackgroundThrottling: DefaultTypes.AnyFunction;
  setBadge: DefaultTypes.AnyFunction;
  setCandidateGamesCallback: DefaultTypes.AnyFunction;
  setCrashInformation: DefaultTypes.AnyFunction;
  setEnableHardwareAcceleration: DefaultTypes.AnyFunction;
  setFocused: DefaultTypes.AnyFunction;
  setForegroundProcess: DefaultTypes.AnyFunction;
  setGameCandidateOverrides: DefaultTypes.AnyFunction;
  setObservedGamesCallback: DefaultTypes.AnyFunction;
  setOnInputEventCallback: DefaultTypes.AnyFunction;
  setSystemTrayApplications: DefaultTypes.AnyFunction;
  setSystemTrayIcon: DefaultTypes.AnyFunction;
  setThumbarButtons: DefaultTypes.AnyFunction;
  setZoomFactor: DefaultTypes.AnyFunction;
  shouldDisplayNotifications: DefaultTypes.AnyFunction;
  showOpenDialog: DefaultTypes.AnyFunction;
  submitLiveCrashReport: DefaultTypes.AnyFunction;
  supportsFeature: DefaultTypes.AnyFunction;
  unblockDisplaySleep: DefaultTypes.AnyFunction;
  undetectPid: DefaultTypes.AnyFunction;
  updateCrashReporter: DefaultTypes.AnyFunction;
}
export interface User {
  avatar: string;
  avatarDecoration: undefined | string;
  bot: boolean;
  desktop: boolean;
  discriminator: string;
  email: null | string;
  flags: number;
  guildMemberAvatars: {
    [key: number]: string;
  };
  hasBouncedEmail: boolean;
  hasFlag: DefaultTypes.AnyFunction;
  id: string;
  isStaff: DefaultTypes.AnyFunction;
  isStaffPersonal: DefaultTypes.AnyFunction;
  mfaEnabled: boolean;
  mobile: boolean;
  nsfwAllowed: undefined | boolean;
  personalConnectionId: null | string;
  phone: null | string;
  premiumType: undefined | number;
  premiumUsageFlags: number;
  publicFlags: number;
  purchasedFlags: number;
  system: boolean;
  username: string;
  verified: boolean;
  createdAt: Date;
  tag: string;
}
export interface ClientThemesExperimentConfig {
  getCurrentConfig: () => {
    hasClientThemes: boolean;
    hasSidebarEditor: boolean;
  };
}
export interface Timeout extends DefaultTypes.AnyFunction {
  prototype: TimeoutPrototype;
}
export interface TimeoutPrototype {
  isStarted: DefaultTypes.AnyFunction;
  start: DefaultTypes.AnyFunction;
  stop: DefaultTypes.AnyFunction;
}
export interface PermissionStore {
  can: DefaultTypes.AnyFunction;
  canAccessGuildSettings: DefaultTypes.AnyFunction;
  canBasicChannel: DefaultTypes.AnyFunction;
  canImpersonateRole: DefaultTypes.AnyFunction;
  canManageUser: DefaultTypes.AnyFunction;
  canWithPartialContext: DefaultTypes.AnyFunction;
  computePermissions: DefaultTypes.AnyFunction;
  getChannelPermissions: DefaultTypes.AnyFunction;
  getChannelsVersion: DefaultTypes.AnyFunction;
  getGuildPermissionProps: DefaultTypes.AnyFunction;
  getPermissionUtils: DefaultTypes.AnyFunction;
  getGuildVersion: DefaultTypes.AnyFunction;
  getHighestRole: DefaultTypes.AnyFunction;
  initialize: DefaultTypes.AnyFunction;
  isRoleHigher: DefaultTypes.AnyFunction;
  clearVars: DefaultTypes.AnyFunction;
}
export interface StreamPreviewStore {
  getIsPreviewLoading: DefaultTypes.AnyFunction;
  getPreviewURL: DefaultTypes.AnyFunction;
  getPreviewURLForStreamKey: DefaultTypes.AnyFunction;
}
export interface ClientThemesBackgroundStore {
  getLinearGradient: DefaultTypes.AnyFunction;
  initializev;
  __getLocalVars: DefaultTypes.AnyFunction;
  constructor: DefaultTypes.AnyFunction;
  gradientAngle: number | null | undefined;
  gradientPreset: object | null | undefined;
  isEditorOpen: boolean;
  isPreview: boolean;
  mobilePendingThemeIndex: number | null | undefined;
  setGradientPreset: DefaultTypes.AnyFunction;
}
export interface CurrentUserIdle {
  getIdleSince: DefaultTypes.AnyFunction;
  isAFK: DefaultTypes.AnyFunction;
  isIdle: DefaultTypes.AnyFunction;
}
export interface CloseButtonProps {
  size?: string;
  className?: string;
  style?: object;
  onClick?: () => void;
}
export interface ImagePickerProps {
  title?: string;
  note: string;
  children?: string;
  value: string;
  disabled?: boolean;
  onChange: (newvalue: string) => void;
}
export interface ImagePickerState {
  showClearButton: boolean;
  img: string;
}

export interface Settings {
  NSFW: boolean;
  bandwidth: boolean;
  PTT: boolean;
  setBadge: boolean;
  streamPreview: boolean;
  fakePreview: string;
  noAFK: boolean;
  spotifyPremium: boolean;
  spotifyPause: boolean;
  verification: boolean;
  maxAccounts: boolean;
  clientThemes: boolean;
  plainFolderIcon: boolean;
}

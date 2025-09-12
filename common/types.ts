import { types } from "replugged";
import GeneralDiscordTypes from "discord-types/general";
import type { Store as StoreType } from "replugged/dist/renderer/modules/common/flux";
import { ContextMenuType } from "replugged/dist/renderer/modules/components/ContextMenu";
import util from "replugged/util";
import { OriginalTooltipType } from "replugged/dist/renderer/modules/components/Tooltip";
export namespace Types {
  export import DefaultTypes = types;
  export type MenuProps = React.ComponentProps<ContextMenuType["ContextMenu"]>;
  export type Tooltip = OriginalTooltipType;
  export type Tree = util.Tree;
  export type ReactTree = React.ReactElement & util.Tree;
  export type Store = StoreType;
  export type OriginalChannel = GeneralDiscordTypes.Channel;
  export type Guild = GeneralDiscordTypes.Guild;
  export type Role = GeneralDiscordTypes.Role;
  export type User = GeneralDiscordTypes.User & { nsfwAllowed: boolean & { original: boolean } };

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

  export interface ImageConstructor {
    IMAGE_GIF_RE: RegExp;
    default: { isAnimated: DefaultTypes.AnyFunction } & DefaultTypes.AnyFunction;
  }

  export interface SpotifyProtocoalStore {
    SpotifyAPI: {
      get: DefaultTypes.AnyFunction;
      put: DefaultTypes.AnyFunction;
    };
    fetchIsSpotifyProtocolRegistered: DefaultTypes.AnyFunction;
    getAccessToken: DefaultTypes.AnyFunction;
    getDevices: DefaultTypes.AnyFunction;
    getProfile: DefaultTypes.AnyFunction;
    pause: DefaultTypes.AnyFunction;
    play: DefaultTypes.AnyFunction;
    setActiveDevice: DefaultTypes.AnyFunction;
    subscribePlayerStateNotifications: DefaultTypes.AnyFunction;
  }
  export interface SpotifyChecks {
    ensureSpotifyPlayable: DefaultTypes.AnyFunction;
    ensureSpotifyPremium: DefaultTypes.AnyFunction;
    isSpotifyPlayable: DefaultTypes.AnyFunction;
    isSpotifyPremium: DefaultTypes.AnyFunction;
  }
  export interface PermissionStore extends Store {
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
  export interface IdleStore extends Store {
    getIdleSince: DefaultTypes.AnyFunction;
    isAFK: DefaultTypes.AnyFunction;
    isIdle: DefaultTypes.AnyFunction;
  }
  export type DownloadButton = React.ComponentType<
    Record<string, unknown> & {
      target?: string;
      rel?: string;
      style?: Record<string, string>;
      href?: string;
      mimeType?: string[];
    }
  >;
  export interface ImagePickerProps {
    title?: string;
    note: string;
    children?: string;
    value: string;
    disabled?: boolean;
    onChange: (newvalue: string) => void;
  }
  export interface ImagePickerState {
    img: string;
  }
  export interface UserSettingsProtoStore extends Store {
    getDismissedGuildContent: DefaultTypes.AnyFunction;
    getFullState: DefaultTypes.AnyFunction;
    getGuildFolders: DefaultTypes.AnyFunction;
    getGuildRecentsDismissedAt: DefaultTypes.AnyFunction;
    getState: DefaultTypes.AnyFunction;
    hasLoaded: DefaultTypes.AnyFunction;
    initialize: DefaultTypes.AnyFunction;
    constructor: DefaultTypes.AnyFunction;
    frecencyWithoutFetchingLatest: object;
    settings: Record<string, unknown> & {
      appearance: { clientThemeSettings: Record<string, unknown> };
    };
    wasMostRecentUpdateFromServer: boolean;
  }
  export interface SettingsPreload {
    PreloadedUserSettings: {
      defaultCheckDepth: number;
      fields: unknown[];
      optionsobject;
      typeName: string;
      binaryReadMap1: DefaultTypes.AnyFunction;
      create: DefaultTypes.AnyFunction;
      internalBinaryRead: DefaultTypes.AnyFunction;
      internalBinaryWrite: DefaultTypes.AnyFunction;
    };
  }

  export interface Modules {
    loadModules?: () => Promise<void>;
    AccountSwitcherStrings?: DefaultTypes.ModuleExports;
    PermissionStore?: PermissionStore;
    ElectronModule?: ElectronModule;
    IdleStore?: IdleStore;
    SpotifyProtocoalStore?: DefaultTypes.ModuleExports;
    SpotifyChecks?: DefaultTypes.ModuleExports;
    ImageConstructor?: Record<string, DefaultTypes.AnyFunction | RegExp>;
    PreloadedUserSettings?: SettingsPreload["PreloadedUserSettings"];
    UserSettingsProtoStore?: UserSettingsProtoStore;
    FolderConstructor?: DefaultTypes.ModuleExports;
    ImageInput?: DefaultTypes.ModuleExports;
    AudioResolverPromise?: Promise<{
      exports: Types.DefaultTypes.AnyFunction;
    }>;
    SpamUtils?: DefaultTypes.ModuleExports;
    VoiceMessage?: React.MemoExoticComponent<React.FC<unknown>>;
    DownloadButton?: DownloadButton;
  }
}
export default Types;

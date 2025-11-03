import { types } from "replugged";
import type util from "replugged/util";
import type * as flux from "replugged/dist/renderer/modules/common/flux";

import type { AudioResolver } from "@lib/RequiredModules/AudioResolver";
import type { DiscordIPC } from "@lib/RequiredModules/DiscordIPC";
import type { DownloadButton } from "@lib/RequiredModules/DownloadButton";
import type { Folder } from "@lib/RequiredModules/Folder";
import type { IdleStore } from "@lib/RequiredModules/IdleStore";
import type { Image } from "@lib/RequiredModules/Image";
import type { MediaModal } from "@lib/RequiredModules/MediaModal";
import type { MultiAccountConstants } from "@lib/RequiredModules/MultiAccountConstants";
import type { PermissionStore } from "@lib/RequiredModules/PermissionStore";
import type { PreloadedUserSettings } from "@lib/RequiredModules/PreloadedUserSettings";
import type { SpamUtils } from "@lib/RequiredModules/SpamUtils";
import type { SpotifyAccountUtils } from "@lib/RequiredModules/SpotifyAccountUtils";
import type { SpotifyProtocoalUtils } from "@lib/RequiredModules/SpotifyProtocoalUtils";
import type { UserSettingsProtoStore } from "@lib/RequiredModules/UserSettingsProtoStore";
import type { VoiceMessage } from "@lib/RequiredModules/VoiceMessage";

import type GeneralDiscordTypes from "discord-types/general";

export namespace Types {
  export import DefaultTypes = types;
  export type Tree = util.Tree;
  export type ReactTree = React.ReactElement & util.Tree;

  export type Store = flux.Store;
  export type OriginalChannel = GeneralDiscordTypes.Channel;
  export type Guild = GeneralDiscordTypes.Guild;
  export type Role = GeneralDiscordTypes.Role;
  export type User = GeneralDiscordTypes.User & { nsfwAllowed: boolean & { original: boolean } };

  export interface Modules {
    Proxy: Exclude<Modules, "Proxy" | "loadModules">;
    loadModules?: () => Promise<void>;
    AudioResolver?: AudioResolver;
    DiscordIPC?: DiscordIPC;
    DownloadButton?: DownloadButton;
    Folder?: Folder["exports"];
    IdleStore?: IdleStore;
    Image?: Image;
    MediaModal?: MediaModal;
    MultiAccountConstants?: MultiAccountConstants;
    PermissionStore?: PermissionStore;
    PreloadedUserSettings?: PreloadedUserSettings;
    SpamUtils?: SpamUtils;
    SpotifyAccountUtils?: SpotifyAccountUtils;
    SpotifyProtocoalUtils?: SpotifyProtocoalUtils;
    UserSettingsProtoStore?: UserSettingsProtoStore;
    VoiceMessage?: VoiceMessage;
  }
}
export default Types;

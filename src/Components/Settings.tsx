import { components, util } from "replugged";
import { CurrentUser, PluginLogger, SettingValues } from "../index";
import { defaultSettings } from "../lib/consts";
import { ImagePickerItem } from "./ImagePicker";
import * as Types from "../types";
const { SwitchItem, FormText, Divider } = components;
export const registerSettings = (): void => {
  for (const key in defaultSettings) {
    if (SettingValues.has(key as keyof Types.Settings)) return;
    PluginLogger.log(`Adding new setting ${key} with value ${defaultSettings[key]}.`);
    SettingValues.set(key as keyof Types.Settings, defaultSettings[key]);
  }
};

export const Settings = () => {
  return (
    <div>
      <SwitchItem
        {...{
          disabled: CurrentUser?.nsfwAllowed && !SettingValues.get("NSFW", defaultSettings.NSFW),
          note: "Bypasses the channel restriction when you're too young to enter channels marked as NSFW.",
          ...util.useSetting(SettingValues, "NSFW", defaultSettings.NSFW),
        }}>
        NSFW bypass
      </SwitchItem>
      <SwitchItem
        {...{
          note: "Lets you stay alone in a call for longer than 5 minutes.",
          ...util.useSetting(SettingValues, "bandwidth", defaultSettings.bandwidth),
        }}>
        Call timeout
      </SwitchItem>
      <SwitchItem
        {...{
          note: "Lets you use voice activity in channels that enforce the use of push-to-talk.",
          ...util.useSetting(SettingValues, "PTT", defaultSettings.PTT),
        }}>
        No push-to-talk
      </SwitchItem>
      <SwitchItem
        {...{
          note: "Hides the badge that appears on the taskbar icon.",
          ...util.useSetting(SettingValues, "setBadge", defaultSettings.setBadge),
        }}>
        Hide Icon Badge
      </SwitchItem>
      <SwitchItem
        {...{
          note: "Stops your stream preview from being rendered. If an image is provided, the image given will be rendered.",
          ...util.useSetting(SettingValues, "streamPreview", defaultSettings.streamPreview),
        }}>
        Custom stream preview
      </SwitchItem>
      <ImagePickerItem
        {...{
          title: "Custom Preview Image",
          note: "Image to render as stream preview. (Must be under 200kb. If no image is provided, no stream preview will be shown.)",
          disabled: !SettingValues.get("streamPreview", defaultSettings.streamPreview),
          ...util.useSetting(SettingValues, "fakePreview", defaultSettings.fakePreview),
        }}
      />
      <SwitchItem
        {...{
          note: "Allows using the Spotify listen along feature on Discord without premium.",
          ...util.useSetting(SettingValues, "spotifyPremium", defaultSettings.spotifyPremium),
        }}>
        Spotify listen along
      </SwitchItem>
      <SwitchItem
        {...{
          note: "Prevents Discord from pausing your Spotify when streaming or gaming.",
          ...util.useSetting(SettingValues, "spotifyPause", defaultSettings.spotifyPause),
        }}>
        Spotify Pause
      </SwitchItem>
      <SwitchItem
        {...{
          note: "Removes the 10 minutes wait before being able to join voice channels in newly joined guilds.",
          ...util.useSetting(SettingValues, "verification", defaultSettings.verification),
        }}>
        Guild verification bypass
      </SwitchItem>
      <SwitchItem
        {...{
          note: "Removes the maximum account limit in Discord's built-in account switcher.",
          ...util.useSetting(SettingValues, "maxAccounts", defaultSettings.maxAccounts),
        }}>
        Max. account limit bypass
      </SwitchItem>
      <SwitchItem
        {...{
          note: "Remove need of nitro from client themes which is beta feature.",
          ...util.useSetting(SettingValues, "clientThemes", defaultSettings.clientThemes),
        }}>
        Client Themes bypass
      </SwitchItem>
      <SwitchItem
        {...{
          note: "Show Plain Folder Icon instead of the small guilds icons on guild folders.",
          ...util.useSetting(SettingValues, "plainFolderIcon", defaultSettings.plainFolderIcon),
        }}>
        Plain Folder Icon
      </SwitchItem>
      <SwitchItem
        {...{
          note: "Adds star to still images too for favouriting them, treats them like GIFs.",
          ...util.useSetting(SettingValues, "favIMG", defaultSettings.favIMG),
        }}>
        Favourite Images
      </SwitchItem>      
      <FormText.LABEL_BOLD
        {...{
          style: {
            textAlign: "center",
            paddingBottom: "20px",
          },
        }}>
        Reload Plugin/Discord for settings to take effect.
      </FormText.LABEL_BOLD>
      <Divider />
    </div>
  );
};

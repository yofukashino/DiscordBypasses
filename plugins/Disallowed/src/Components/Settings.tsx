import { settings, util } from "replugged";
import { users } from "replugged/common";
import { Select, Stack, Switch, Text } from "replugged/components";
import { PluginLogger, SettingValues } from "@this";
import { DefaultSettings } from "@consts";
import ImagePicker from "./ImagePicker";

export const migrateSettings = (id: string): void => {
  const OldNamespace = settings.init(id, {});
  type DefaultSettings = typeof DefaultSettings;
  type key = keyof DefaultSettings;
  type value = DefaultSettings[key];

  for (const key in OldNamespace.all()) {
    const value = OldNamespace.get(key) as string;
    if (!value) continue;
    PluginLogger.log(`Mirgrating setting ${key} with value ${value}.`);
    SettingValues.set(key as key, value as value);
    OldNamespace.delete(key);
  }
};

export const registerSettings = (id?: string): void => {
  type DefaultSettings = typeof DefaultSettings;
  type key = keyof DefaultSettings;
  type value = DefaultSettings[key];

  for (const key in DefaultSettings) {
    if (SettingValues.has(key as key)) continue;
    PluginLogger.log(`Adding new setting ${key} with value ${DefaultSettings[key]}.`);
    SettingValues.set(key as key, DefaultSettings[key] as value);
  }

  migrateSettings(id ?? "dev.tharki.DiscordBypasses");
};

export const Settings = ({ store } = { store: false }): React.ReactElement => {
  const NotAllowedSetting = ({
    children,
  }: {
    children: React.ReactElement;
  }): React.ReactElement => {
    if (store) return <></>;
    return children;
  };

  return (
    <Stack gap={24}>
      <NotAllowedSetting>
        <Switch
          label="NSFW bypass"
          disabled={
            users.getCurrentUser()?.nsfwAllowed && !SettingValues.get("NSFW", DefaultSettings.NSFW)
          }
          description="Bypasses the channel restriction when you're too young to enter channels marked as NSFW."
          {...util.useSetting(SettingValues, "NSFW", DefaultSettings.NSFW)}
        />
      </NotAllowedSetting>
      <NotAllowedSetting>
        <Switch
          label="Call timeout"
          description="Lets you stay alone in a call for longer than 5 minutes."
          {...util.useSetting(SettingValues, "bandwidth", DefaultSettings.bandwidth)}
        />
      </NotAllowedSetting>
      <Switch
        label="No push-to-talk"
        description="Lets you use voice activity in channels that enforce the use of push-to-talk."
        {...util.useSetting(SettingValues, "PTT", DefaultSettings.PTT)}
      />
      <Switch
        label="Hide Icon Badge"
        description="Hides the badge that appears on the taskbar icon."
        {...util.useSetting(SettingValues, "setBadge", DefaultSettings.setBadge)}
      />
      <Switch
        label="Custom stream preview"
        description="Stops your stream preview from being rendered. If an image is provided, the image given will be rendered."
        {...util.useSetting(SettingValues, "streamPreview", DefaultSettings.streamPreview)}
      />
      <ImagePicker
        disabled={!SettingValues.get("streamPreview", DefaultSettings.streamPreview)}
        {...util.useSetting(SettingValues, "fakePreview", DefaultSettings.fakePreview)}
      />
      <Switch
        label="Spotify listen along"
        description="Allows using the Spotify listen along feature on Discord without premium."
        {...util.useSetting(SettingValues, "spotifyPremium", DefaultSettings.spotifyPremium)}
      />
      <Switch
        label="Spotify Pause"
        description="Prevents Discord from pausing your Spotify when streaming or gaming."
        {...util.useSetting(SettingValues, "spotifyPause", DefaultSettings.spotifyPause)}
      />
      <NotAllowedSetting>
        <Switch
          label="Guild requirement bypass"
          description="Removes the 10 minutes wait before being able to join voice channels in newly joined guilds."
          {...util.useSetting(SettingValues, "verification", DefaultSettings.verification)}
        />
      </NotAllowedSetting>
      <Switch
        label="Max account limit bypass"
        description="Removes the maximum account limit in Discord's built-in account switcher."
        {...util.useSetting(SettingValues, "maxAccounts", DefaultSettings.maxAccounts)}
      />
      <Switch
        label="No Idle"
        description="Stops Discord from setting your presence to idle when you leave Discord alone."
        {...util.useSetting(SettingValues, "noAFK", DefaultSettings.noAFK)}
      />
      <Switch
        label="Client Themes bypass"
        description="Remove the need for Nitro from client themes."
        {...util.useSetting(SettingValues, "clientThemes", DefaultSettings.clientThemes)}
      />
      <Switch
        label="Sidebar App Icon bypass"
        description="Remove the need for Nitro from app icon in sidebar."
        {...util.useSetting(SettingValues, "appIcons", DefaultSettings.appIcons)}
      />
      <Switch
        label="Plain Folder Icon"
        description="Show Plain Folder Icon instead of the small guilds icons on guild folders."
        {...util.useSetting(SettingValues, "plainFolderIcon", DefaultSettings.plainFolderIcon)}
      />

      <Switch
        label="Favorite Images"
        description="Adds a star to still images too for favoriting them, treats them like GIFs."
        {...util.useSetting(SettingValues, "favIMG", DefaultSettings.favIMG)}
      />

      <Select
        label="Special Ringtone"
        options={[
          { label: "Sync With Discord", value: "sync" },
          { label: "Default Ringtone", value: "call_ringing.mp3" },
          { label: "Secret Ringtone", value: "call_ringing_beat.mp3" },
          { label: "Halloween Ringtone", value: "halloween_call_ringing.mp3" },
          { label: "Snowsgiving Ringtone", value: "call_ringing_snowsgiving.mp3" },
          { label: "Snow Halation Ringtone", value: "call_ringing_snow_halation.mp3" },
        ]}
        {...util.useSetting(SettingValues, "ringtone", DefaultSettings.ringtone)}
      />

      <Switch
        label="No Spam"
        description="Show none of the users as spam."
        {...util.useSetting(SettingValues, "spam", DefaultSettings.spam)}
      />
      <Switch
        label="Downloadable Voice Messages"
        description="Add Download button for voice messages."
        {...util.useSetting(SettingValues, "voiceMessage", DefaultSettings.voiceMessage)}
      />

      <Switch
        label="Silence Logger"
        description="Silence discord's logger (The Purple ones)."
        {...util.useSetting(SettingValues, "silenceLogger", DefaultSettings.silenceLogger)}
      />

      <Switch
        label="Never Stream Paused"
        description="Keep your stream playing even while discord is not focused."
        {...util.useSetting(SettingValues, "streamPause", DefaultSettings.streamPause)}
      />

      <Text
        variant="redesign/message-preview/semibold"
        style={{
          textAlign: "center",
          paddingBottom: "20px",
        }}>
        Reload Plugin/Discord for settings to take effect.
      </Text>
    </Stack>
  );
};

export default { registerSettings, Settings };
